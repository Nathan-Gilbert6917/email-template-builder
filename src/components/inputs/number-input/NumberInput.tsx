import React, { FC } from 'react';

import './NumberInput.css';

interface NumberInputProps {
    label: string; 
    type: "number";
    value?: number;
    name: string;
    max: number;
    min: number;
    isRequired?: boolean;
    onChange: (value: number) => void;
}

const NumberInput: FC<NumberInputProps> = (
    { label, type="number", value, name, max, min, isRequired, onChange }
) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(+event.target.value);
    };

    return (
        <div className="number-input-box">
            <div className="number-input-inner">
                <input
                    className={`number-input-field ${(value && value >= min) ? 'active' : ''}`}
                    type={type}
                    name={name}
                    value={(value && value >= min) ? value : ''}
                    min={min}
                    max={max}
                    required={isRequired}
                    onChange={handleInputChange}
                />
                <label className="input-label">{label}</label>
            </div>
        </div>
    );
}

export default NumberInput;