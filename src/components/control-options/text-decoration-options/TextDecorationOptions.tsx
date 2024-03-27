import React, { FC, useState } from 'react';

import './TextDecorationOptions.css';
import CheckBoxGroup, { CheckboxOption } from '../../inputs/checkbox-group/CheckBoxGroup';
import DropDownSelect, { DropDownSelectValue } from '../../inputs/dropdown-select/DropDownSelect';
import ColorInput from '../../inputs/color-input/ColorInput';
import NumberInput from '../../inputs/number-input/NumberInput';


export type TextDecorationStyleType = "solid" | "double" | "dotted" | "dashed" | "wavy";

export interface TextDecorationOptionValuesValues {
    underlined: boolean;
    lineThrough: boolean;
    overline: boolean;
}

export interface TextDecorationOptionValues {
    values: TextDecorationOptionValuesValues;
    style: TextDecorationStyleType;
    color: string;
    size: number;
}

interface TextDecorationOptionsProps {
   values?: TextDecorationOptionValues,
   onChange: (value: TextDecorationOptionValues) => void;
}

const TextDecorationOptions: FC<TextDecorationOptionsProps> = (
    { values, onChange }
) => {

    const textValuesOptions: CheckboxOption[] = [
        { label: "Underline", checked: false},
        { label: "Line Through", checked: false},
        { label: "Overline", checked: false}
    ]

    const textStyleOptions: DropDownSelectValue[] = [
        { text: "Solid", value: "solid"},
        { text: "Double", value: "double"},
        { text: "Dotted", value: "dotted"},
        { text: "Dashed", value: "dashed"},
        { text: "Wavy", value: "wavy"}
    ]

    const initalTextDecorationValues: TextDecorationOptionValues = {
        values: {
            underlined: false,
            lineThrough: false,
            overline: false
        },
        style: 'solid',
        color: '',
        size: 0
    }

    const [textDecorationOptionValues, setTextDecorationOptionValues] = useState(values?values:initalTextDecorationValues);

    const isTextDecorationStyleType = (value: string): value is TextDecorationStyleType => {
        return ["solid", "double", "dotted", "dashed", "wavy"].includes(value);
    };

    const handleOptionChange = (changedValues: Partial<TextDecorationOptionValues>) => {
        const newValues: TextDecorationOptionValues = { ...textDecorationOptionValues, ...changedValues };
        setTextDecorationOptionValues(newValues);
        onChange(newValues);
    };

    const handleTextDecorationStyleChange = (value: string) => {
        if (isTextDecorationStyleType(value)) {
            handleOptionChange({ style: value });
        }
    }

    const handleTextDecorationValuesChange = (values: CheckboxOption[]) => {

        let underlined = textDecorationOptionValues.values.underlined;
        let lineThrough = textDecorationOptionValues.values.lineThrough;
        let overlined = textDecorationOptionValues.values.overline;
        
        values.forEach(({label, checked}: CheckboxOption) => {
            if (label === "Underline") {
                underlined = checked;
            }
            if (label === "Line Through") {
                lineThrough = checked;
            }
            if (label === "Overline") {
                overlined = checked;
            }
        });
        handleOptionChange({ values: { 
            underlined: underlined, 
            lineThrough: lineThrough, 
            overline: overlined
        }});
    }

    return (
        <div>
            <CheckBoxGroup options={textValuesOptions} onChange={(values) => handleTextDecorationValuesChange(values)} />
            <DropDownSelect label={'Style'} value={textDecorationOptionValues.style} options={textStyleOptions} onChange={(value: string) => handleTextDecorationStyleChange(value)} />
            <ColorInput label={'Color'} value={textDecorationOptionValues.color} onChange={(value) => handleOptionChange({ color: value })} />
            <NumberInput label={'Size'} value={textDecorationOptionValues.size} type={'number'} name={''} max={100} min={-100} onChange={(value) => handleOptionChange({ size: value })} />
        </div>
    );
}

export default TextDecorationOptions;