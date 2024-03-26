import React, { FC } from 'react';

import './TextInput.css';


interface TextInputProps {
    label: string; 
    type: "text" | "password";
    value?: string;
    name: string;
    isRequired?: boolean;
    onChange: (value: string) => void;
}

const TextInput: FC<TextInputProps> = (
    { label, type="text", value, name, isRequired, onChange }
) => {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="text-input-box">
            <div className="text-input-inner">
                <input
                    className={`input-field ${value ? 'active' : ''}`}
                    type={type}
                    name={name}
                    value={value}
                    required={isRequired}
                    onChange={handleInputChange}
                />
                <label className="input-label">{label}</label>
            </div>
        </div>
    );
}

export default TextInput;