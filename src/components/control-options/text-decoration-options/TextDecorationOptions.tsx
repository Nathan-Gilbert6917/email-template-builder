import React, { FC, useState } from 'react';

import './TextOptions.css';
import CheckBoxGroup, { CheckboxOption } from '../../inputs/checkbox-group/CheckBoxGroup';
import DropDownSelect, { DropDownSelectValue } from '../../inputs/dropdown-select/DropDownSelect';
import ColorInput from '../../inputs/color-input/ColorInput';
import NumberInput from '../../inputs/number-input/NumberInput';


export type TextDecorationStyleType = "normal" | "italic" | "oblique";

export interface TextDecorationValues {
    underlined: boolean;
    lineThrough: boolean;
    overline: boolean;
}

export interface TextDecorationOptionValueTypes {
    values: TextDecorationValues;
    style: TextDecorationStyleType;
    color: string;
    size: number;
}

interface TextDecorationOptionsProps {
   values: TextDecorationOptionValueTypes,
   onChange: (value: TextDecorationOptionValueTypes) => void;
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
        { text: "normal", value: "normal"},
        { text: "italic", value: "italic"},
        { text: "oblique", value: "oblique"}
    ]

    const [textDecorationOptionValues, setTextDecorationOptionValues] = useState(values);

    const isTextDecorationStyleType = (value: string): value is TextDecorationStyleType => {
        return ["Arial", "Verdana", "Tahoma", "'Trebuchet MS'", "'Times New Roman'", "Georgia", "'Courier New'", "Roboto"].includes(value);
    };

    const handleOptionChange = (changedValues: Partial<TextDecorationOptionValueTypes>) => {
        const newValues: TextDecorationOptionValueTypes = { ...textDecorationOptionValues, ...changedValues };
        setTextDecorationOptionValues(newValues);
        onChange(newValues);
    };

    const handleTextDecorationStyleChange = (value: string) => {
        if (isTextDecorationStyleType(value)) {
            handleOptionChange({ style: value });
        }
    }

    const handleTextDecorationValuesChange = (values: CheckboxOption[]) => {
        values.forEach(({label, checked}: CheckboxOption) => {
            if (label === "Underline") {
                textDecorationOptionValues.values.underlined = checked;
            }
            if (label === "Line Through") {
                textDecorationOptionValues.values.lineThrough = checked;
            }
            if (label === "Overline") {
                textDecorationOptionValues.values.overline = checked;
            }
        });
        handleOptionChange({ values: { 
            underlined: textDecorationOptionValues.values.underlined, 
            lineThrough: textDecorationOptionValues.values.lineThrough, 
            overline: textDecorationOptionValues.values.overline 
        }});
    }

    return (
        <div>
            <CheckBoxGroup options={textValuesOptions} onChange={(values) => handleTextDecorationValuesChange(values)} />
            <DropDownSelect label={'Style'} value={textDecorationOptionValues.style} options={textStyleOptions} onChange={(value: string) => handleTextDecorationStyleChange(value)} />
            <ColorInput label={'Color'} value={textDecorationOptionValues.color} onChange={(value) => handleOptionChange({ color: value })} />
            <NumberInput label={'Size'} value={textDecorationOptionValues.size} type={'number'} name={''} max={0} min={0} onChange={(value) => handleOptionChange({ size: value })} />
        </div>
    );
}

export default TextDecorationOptions;