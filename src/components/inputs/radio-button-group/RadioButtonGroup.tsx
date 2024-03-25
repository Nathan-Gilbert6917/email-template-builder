import React, { FC } from 'react';

import './RadioButtonGroup.css';


interface RadioButtonGroupProps {
    label?: string;
    options: { label: string; value: string }[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const RadioButtonGroup: FC<RadioButtonGroupProps> = (
    { label, options, selectedValue, onChange }
) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='radio-group-box'>
        {label ?
            <label className='radio-group-label'>{label}</label>
            : <></>
        }
        {options.map((option, index) => (
        <label key={index} className='radio-button-label'>
          <input
            className='radio-button-input'
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
          />
          {option.label}
        </label>
      ))}
    </div>
    );
}

export default RadioButtonGroup;