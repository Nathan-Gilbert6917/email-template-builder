import React, { FC, useState } from 'react';

import './TextOptions.css';
import TextInput from '../../inputs/text-input/TextInput';
import DropDownSelect, { DropDownSelectValue } from '../../inputs/dropdown-select/DropDownSelect';
import NumberInput from '../../inputs/number-input/NumberInput';
import ColorInput from '../../inputs/color-input/ColorInput';
import CheckBox from '../../inputs/checkbox/CheckBox';

type TextFontType = "Arial" | "Verdana" | "Tahoma" | "'Trebuchet MS'" | "'Times New Roman'" | "Georgia" | "'Courier New'" | "Roboto";

type TextStyleType = "normal" | "italic" | "oblique";

export interface TextOptionValueTypes {
    text: string;
    font: TextFontType;
    fontSize: number;
    textColor: string;
    boldText: boolean;
    textStyle: TextStyleType;
}

interface TextOptionsProps {
   values: TextOptionValueTypes,
   onChange: (value: TextOptionValueTypes) => void;
}

const TextOptions: FC<TextOptionsProps> = (
    { values, onChange }
) => {

    const fontFamilyOptions: DropDownSelectValue[] = [
        {text: "Arial", value: "Arial"},
        {text: "Verdana", value: "Verdana"},
        {text: "Tahoma", value: "Tahoma"},
        {text: "'Trebuchet MS'", value: "'Trebuchet MS'"},
        {text: "'Times New Roman'", value: "'Times New Roman'"},
        {text: "Georgia", value: "Georgia"},
        {text: "'Courier New'", value: "'Courier New'"},
        {text: "Roboto", value: "Roboto"}
    ]

    const textStyleOptions = [
        { text: "normal", value: "normal"},
        { text: "italic", value: "italic"},
        { text: "oblique", value: "oblique"}
    ]

    const [textOptionValues, setTextOptionValues] = useState(values);

    const isTextFontType = (value: string): value is TextFontType => {
        return ["Arial", "Verdana", "Tahoma", "'Trebuchet MS'", "'Times New Roman'", "Georgia", "'Courier New'", "Roboto"].includes(value);
    };

    const isTextStyleType = (value: string): value is TextStyleType => {
        return ["normal", "italic", "oblique"].includes(value);
    };

    const handleOptionChange = (changedValues: Partial<TextOptionValueTypes>) => {
        const newValues: TextOptionValueTypes = { ...textOptionValues, ...changedValues };
        setTextOptionValues(newValues);
        onChange(newValues);
    };

    const handleTextFontChange = (value: string) => {
        if (isTextFontType(value)) {
            handleOptionChange({ font: value });
        }
    }

    const handleTextStyleChange = (value: string) => {
        if (isTextStyleType(value)) {
            handleOptionChange({ textStyle: value });
        }
    }


    return (
        <div>
            <TextInput label={'Text'} value={textOptionValues.text} type={'text'} name={'text'} onChange={(value: string) => handleOptionChange({ text: value })} />
            <DropDownSelect label={'Font Family'} value={textOptionValues.font} options={fontFamilyOptions} onChange={(value: string) => handleTextFontChange(value)} />
            <NumberInput label={'Font Size'} value={textOptionValues.fontSize} type={'number'} name={'fontSize'} max={0} min={0} onChange={(value: number) => handleOptionChange({ fontSize: value })} />
            <ColorInput label={'Text Color'} value={textOptionValues.textColor} onChange={(value: string) => handleOptionChange({ textColor: value })} />
            <CheckBox label={'Bold Text'} checked={textOptionValues.boldText} onChange={(value: boolean) => handleOptionChange({ boldText: value })} />
            <DropDownSelect label={'Text Style'} value={textOptionValues.textStyle} options={textStyleOptions} onChange={(value: string) => handleTextStyleChange(value)} />
        </div>
    );
}

export default TextOptions;