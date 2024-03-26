import React, { FC, useState } from 'react';

import './PaddingOptions.css';
import NumberInput from '../../../inputs/number-input/NumberInput';

export interface PaddingOptionValues {
    PaddingLeft?: number;
    PaddingTop?: number;
    PaddingRight?: number;
    PaddingBottom?: number;
}

interface PaddingOptionsProps {
   values?: PaddingOptionValues,
   onChange: (value: PaddingOptionValues) => void;
}

const PaddingOptions: FC<PaddingOptionsProps> = (
    { values, onChange }
) => {

    const initalPaddingValues:PaddingOptionValues = {
    }

    const [sizingOptionValues, setSizingOptionValues] = useState(values?values:initalPaddingValues);

    const handleOptionChange = (changedValues: Partial<PaddingOptionValues>) => {
        const newValues: PaddingOptionValues = { ...sizingOptionValues, ...changedValues };
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