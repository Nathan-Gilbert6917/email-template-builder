import React, { FC, useState } from 'react';

import './SpacingOptions.css';
import NumberInput from '../../../inputs/number-input/NumberInput';
import CheckBox from '../../../inputs/checkbox/CheckBox';

export interface HeightValueTypes {
    height: number;
    perecntHeight: boolean;
    minHeight: number;
    maxHeight: number;
}

interface HeightOptionsProps {
   values: HeightValueTypes,
   onChange: (value: HeightValueTypes) => void;
}

const HeightOptions: FC<HeightOptionsProps> = (
    { values, onChange }
) => {

    const [sizingOptionValues, setSizingOptionValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<HeightValueTypes>) => {
        const newValues: HeightValueTypes = { ...sizingOptionValues, ...changedValues };
        setSizingOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <NumberInput label={'Height'} value={sizingOptionValues.height} name={'Height'} onChange={(value: number) => handleOptionChange({ height: value })} type={'number'} max={1500} min={0} />
            <CheckBox label={'% Height'} checked={sizingOptionValues.perecntHeight} onChange={(value: boolean) => handleOptionChange({ perecntHeight: value })} />
            <NumberInput label={'Min Height'} value={sizingOptionValues.minHeight} name={'minHeight'} onChange={(value: number) => handleOptionChange({ minHeight: value })} type={'number'} max={1500} min={0} />
            <NumberInput label={'Max Height'} value={sizingOptionValues.maxHeight} name={'maxHeight'} onChange={(value: number) => handleOptionChange({ maxHeight: value })} type={'number'} max={1500} min={0} />
        </div>
    );
}

export default HeightOptions;