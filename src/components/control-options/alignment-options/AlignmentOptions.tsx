import React, { FC, useState } from 'react';

import './AlignmentOptions.css';
import RadioButtonGroup from '../../inputs/radio-button-group/RadioButtonGroup';

interface AlignmentOptionsProps {
    value?: string;
    onChange: (value: string) => void;
}

const AlignmentOptions: FC<AlignmentOptionsProps> = (
    { value, onChange }
) => {

    const radioOptions = [
        { label: 'Align Left', value: 'left' },
        { label: 'Align Center', value: 'center' },
        { label: 'Align Right', value: 'right' },
    ];

    const [selectedRadioOption, setSelectedRadioOption] = useState(value ? value : radioOptions[0].value);

    const handleAlignmentChange = (value: string) => {
        setSelectedRadioOption(value);
        onChange(value);
    }

    return (
        <div>
            <RadioButtonGroup options={radioOptions} selectedValue={selectedRadioOption} onChange={handleAlignmentChange}/>
        </div>
    );
}

export default AlignmentOptions;