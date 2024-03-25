import React, { FC } from 'react';

import './CheckBox.css';


interface CheckBoxProps {
    label: string;
    someChecked?: boolean;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const CheckBox: FC<CheckBoxProps> = (
    {label, someChecked, checked, onChange}
) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <label className="checkbox-label">
            <input
                type="checkbox"
                checked={checked || someChecked}
                onChange={handleChange}
                className="checkbox-input"
            /> 
            <span className={`checkbox-custom${someChecked ? '-some' : ''}`}></span>
            {label}
        </label>
    );
}

export default CheckBox;