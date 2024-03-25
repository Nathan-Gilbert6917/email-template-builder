import React, { FC, useState } from 'react';

import './HeaderOptions.css';
import DropDownSelect, { DropDownSelectValue } from '../../inputs/dropdown-select/DropDownSelect';

export type HeaderType =
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6" 

export interface HeaderValueTypes {
    type: HeaderType
}

interface HeaderOptionsProps {
    value: HeaderValueTypes;
    onChange: (value: HeaderValueTypes) => void;
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

    const [headerOptionValues, setHeaderOptionValues] = useState(value);

    const isHeaderType = (value: string): value is HeaderType => {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
    };

    const handleOptionChange = (changedValues: Partial<HeaderValueTypes>) => {
        const newValues: HeaderValueTypes = { ...headerOptionValues, ...changedValues };
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