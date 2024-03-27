import React, { FC, useState } from 'react';

import './AlignmentOptions.css';
import RadioButtonGroup from '../../inputs/radio-button-group/RadioButtonGroup';

export type AlignmentStyleType = "start" | "end" | "left" | "right" | "center" | "justify" | "match-parent";

export const isAlignmentStyleType = (value: string): value is AlignmentStyleType => {
    return ["start", "end", "left", "right", "center", "justify", "match-parent"].includes(value);
};
interface AlignmentOptionsProps {
    value?: AlignmentStyleType;
    onChange: (value: AlignmentStyleType) => void;
}

const AlignmentOptions: FC<AlignmentOptionsProps> = (
    { value, onChange }
) => {

    const radioOptions = [
        { label: 'Align Start', value: 'start' },
        { label: 'Align Left', value: 'left' },
        { label: 'Align Center', value: 'center' },
        { label: 'Align Right', value: 'right' },
        { label: 'Align End', value: 'end' },
    ];

    const [selectedRadioOption, setSelectedRadioOption] = useState(value ? value : radioOptions[0].value);

    const handleAlignmentChange = (value: AlignmentStyleType) => {
        setSelectedRadioOption(value);
        onChange(value);
    }

    const handleTypeChange = (value: string) => {
        if (isAlignmentStyleType(value)) {
            handleAlignmentChange(value);
        }
    }

    return (
        <div>
            <RadioButtonGroup options={radioOptions} selectedValue={selectedRadioOption} onChange={handleTypeChange}/>
        </div>
    );
}

export default AlignmentOptions;