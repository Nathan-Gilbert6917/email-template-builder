import React, { FC, useState } from 'react';

import './PaddingOptions.css';
import NumberInput from '../../../inputs/number-input/NumberInput';

export interface PaddingValueTypes {
    PaddingLeft: number;
    PaddingTop: number;
    PaddingRight: number;
    PaddingBottom: number;
}

interface PaddingOptionsProps {
   values: PaddingValueTypes,
   onChange: (value: PaddingValueTypes) => void;
}

const PaddingOptions: FC<PaddingOptionsProps> = (
    { values, onChange }
) => {

    const [sizingOptionValues, setSizingOptionValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<PaddingValueTypes>) => {
        const newValues: PaddingValueTypes = { ...sizingOptionValues, ...changedValues };
        setSizingOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <NumberInput label={'Padding Left'} value={sizingOptionValues.PaddingLeft} name={'PaddingLeft'} onChange={(value: number) => handleOptionChange({ PaddingLeft: value })} type={'number'} max={1000} min={-1000} />
            <NumberInput label={'Padding Right'} value={sizingOptionValues.PaddingRight} name={'PaddingRight'} onChange={(value: number) => handleOptionChange({ PaddingRight: value })} type={'number'} max={1000} min={-1000} />
            <NumberInput label={'Padding Top'} value={sizingOptionValues.PaddingTop} name={'PaddingTop'} onChange={(value: number) => handleOptionChange({ PaddingTop: value })} type={'number'} max={1000} min={-1000} />
            <NumberInput label={'Padding Bottom'} value={sizingOptionValues.PaddingBottom} name={'PaddingBottom'} onChange={(value: number) => handleOptionChange({ PaddingBottom: value })} type={'number'} max={1000} min={-1000} />
        </div>
    );
}

export default PaddingOptions;