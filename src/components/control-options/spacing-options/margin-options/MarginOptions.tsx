import React, { FC, useState } from 'react';

import './MarginOptions.css';
import NumberInput from '../../../inputs/number-input/NumberInput';

export interface MarginOptionValues {
    marginLeft?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
}

interface MarginOptionsProps {
   values?: MarginOptionValues,
   onChange: (value: MarginOptionValues) => void;
}

const MarginOptions: FC<MarginOptionsProps> = (
    { values, onChange }
) => {

    const initalMarginValues:MarginOptionValues = {
    }

    const [sizingOptionValues, setSizingOptionValues] = useState(values?values:initalMarginValues);

    const handleOptionChange = (changedValues: Partial<MarginOptionValues>) => {
        const newValues: MarginOptionValues = { ...sizingOptionValues, ...changedValues };
        setSizingOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <NumberInput label={'Margin Left'} value={sizingOptionValues.marginLeft} name={'marginLeft'} onChange={(value: number) => handleOptionChange({ marginLeft: value })} type={'number'} max={1000} min={-1000} />
            <NumberInput label={'Margin Right'} value={sizingOptionValues.marginRight} name={'marginRight'} onChange={(value: number) => handleOptionChange({ marginRight: value })} type={'number'} max={1000} min={-1000} />
            <NumberInput label={'Margin Top'} value={sizingOptionValues.marginTop} name={'marginTop'} onChange={(value: number) => handleOptionChange({ marginTop: value })} type={'number'} max={1000} min={-1000} />
            <NumberInput label={'Margin Bottom'} value={sizingOptionValues.marginBottom} name={'marginBottom'} onChange={(value: number) => handleOptionChange({ marginBottom: value })} type={'number'} max={1000} min={-1000} />
        </div>
    );
}

export default MarginOptions;