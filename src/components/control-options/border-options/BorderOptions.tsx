import React, { FC, useState } from 'react';

import './BorderOptions.css';
import ColorInput from '../../inputs/color-input/ColorInput';
import NumberInput from '../../inputs/number-input/NumberInput';
import DropDownSelect, { DropDownSelectValue } from '../../inputs/dropdown-select/DropDownSelect';

type BorderTypesType =
        "solid" | "dotted" | "dashed" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden";

export interface BorderOptionValues {
    borderSize?: number;
    borderType: BorderTypesType;
    borderColor: string;
}

interface BorderOptionsProps {
    values?: BorderOptionValues
    onChange: (value: BorderOptionValues) => void;
}

const BorderOptions: FC<BorderOptionsProps> = (
    { values, onChange }
) => {

    const initialBorderValues:BorderOptionValues = {
        borderType: "none",
        borderColor: "#000000",
    }

    const borderTypeOptions: DropDownSelectValue[] = [
        { text: 'Solid', value: 'solid' },
        { text: 'Dotted', value: 'dotted' },
        { text: 'Dashed', value: 'dashed' },
        { text: 'Double', value: 'double' },
        { text: 'Groove', value: 'groove' },
        { text: 'Ridge', value: 'ridge' },
        { text: 'Inset', value: 'inset' },
        { text: 'Outset', value: 'outset' },
        { text: 'None', value: 'none' },
        { text: 'Hidden', value: 'hidden' },
    ]

    const [borderOptionValues, setBorderOptionValues] = useState(values?values:initialBorderValues);

    const isBorderType = (value: string): value is BorderTypesType => {
        return ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset", "none", "hidden"].includes(value);
    };

    const handleOptionChange = (changedValues: Partial<BorderOptionValues>) => {
        const newValues: BorderOptionValues = { ...borderOptionValues, ...changedValues };
        setBorderOptionValues(newValues);
        onChange(newValues);
    };

    const handleTypeChange = (value: string) => {
        if (isBorderType(value)) {
            handleOptionChange({ borderType: value });
        }
    }

    return (
        <div>
            <NumberInput label={'Border Size'} value={borderOptionValues.borderSize} type={'number'} name={''} max={0} min={100} onChange={(value: number) => handleOptionChange({ borderSize: value })}/>
            <DropDownSelect label={'Border Type'} value={borderOptionValues.borderType} options={borderTypeOptions} onChange={(value: string) => handleTypeChange(value)}/>
            <ColorInput label={'Border Color'} value={borderOptionValues.borderColor} onChange={(value: string) => handleOptionChange({ borderColor: value })}/>
        </div>
    );
}
export default BorderOptions;