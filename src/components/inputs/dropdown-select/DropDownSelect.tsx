import React, { FC } from 'react';

import './DropDownSelect.css';


interface DropDownSelectProps {
    label?: string;
    value: string;
    options: {value:string, text:string}[];
    onChange: (value: string) => void;
}

const DropDownSelect: FC<DropDownSelectProps> = (
    { label, value, options, onChange }
) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="option-select-box">
            {label ?
                <label className="option-select-label">{label}</label>
            : <></>}
            <select className="option-select-input" value={value} onChange={handleInputChange}>
                {options.map((option, index) => {
                return (
                    <option key={index} value={option.value}>
                        {option.text}
                    </option> 
                )
                })}
            </select>
        </div>
    );
}

export default DropDownSelect;