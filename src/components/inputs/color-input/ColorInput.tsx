import React, { FC } from 'react';

import './ColorInput.css';


interface ColorInputProps {
    label: string; 
    value: string;
    isRequired?: boolean;
    onChange: (value: string) => void;
}

const ColorInput: FC<ColorInputProps> = (
    { label, value, isRequired, onChange}
) => {

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="color-input-box">
            <label className="input-label">{label}</label>
            <div className="color-input-inner">
                <input
                    className="color-input-field"
                    type="color"
                    value={value}
                    required={isRequired}
                    onChange={handleColorChange}
                />
                <p className="color-input-value">{value}</p>
            </div>
        </div>
    );
}

export default ColorInput;