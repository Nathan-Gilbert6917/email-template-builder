import React, { FC, useState } from 'react';

import './HeaderOptions.css';
import DropDownSelect, { DropDownSelectValue } from '../../inputs/dropdown-select/DropDownSelect';

export type HeaderType =
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" 

export interface HeaderOptionValues {
    type: HeaderType
}

interface HeaderOptionsProps {
    value?: HeaderOptionValues;
    onChange: (value: HeaderOptionValues) => void;
}

const HeaderOptions: FC<HeaderOptionsProps> = (
    { value, onChange }
) => {

    const headerTypeOptions: DropDownSelectValue[] = [
        { text: 'H1', value: 'h1' },
        { text: 'H2', value: 'h2' },
        { text: 'H3', value: 'h3' },
        { text: 'H4', value: 'h4' },
        { text: 'H5', value: 'h5' },
        { text: 'H6', value: 'h6' },
    ]

    const initialHeaderValue: HeaderOptionValues = {
        type: "h1"
    }

    const [headerOptionValues, setHeaderOptionValues] = useState(value ? value:initialHeaderValue);

    const isHeaderType = (value: string): value is HeaderType => {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
    };

    const handleOptionChange = (changedValues: Partial<HeaderOptionValues>) => {
        const newValues: HeaderOptionValues = { ...headerOptionValues, ...changedValues };
        setHeaderOptionValues(newValues);
        onChange(newValues);
    };

    const handleTypeChange = (value: string) => {
        if (isHeaderType(value)) {
            handleOptionChange({ type: value });
        }
    }

    return (
        <div>
            <DropDownSelect value={headerOptionValues.type} options={headerTypeOptions} onChange={(value: string) => handleTypeChange(value)} />
        </div>
    );
}

export default HeaderOptions;