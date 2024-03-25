import React, { FC, useState } from 'react';

import './SpacingOptions.css';
import NumberInput from '../../../inputs/number-input/NumberInput';
import CheckBox from '../../../inputs/checkbox/CheckBox';

export interface WidthValueTypes {
    width: number;
    percentWidth: boolean;
    minWidth: number;
    maxWidth: number;
}

interface WidthOptionsProps {
   values: WidthValueTypes,
   onChange: (value: WidthValueTypes) => void;
}

const WidthOptions: FC<WidthOptionsProps> = (
    { values, onChange }
) => {

    const [sizingOptionValues, setSizingOptionValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<WidthValueTypes>) => {
        const newValues: WidthValueTypes = { ...sizingOptionValues, ...changedValues };
        setSizingOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <NumberInput label={'Width'} value={sizingOptionValues.width} name={'width'} onChange={(value: number) => handleOptionChange({ width: value })} type={'number'} max={1500} min={0} />
            <CheckBox label={'% Height'} checked={sizingOptionValues.percentWidth} onChange={(value: boolean) => handleOptionChange({ percentWidth: value })} />
            <NumberInput label={'Min Width'} value={sizingOptionValues.minWidth} name={'minWidth'} onChange={(value: number) => handleOptionChange({ minWidth: value })} type={'number'} max={1500} min={0} />
            <NumberInput label={'Max Width'} value={sizingOptionValues.maxWidth} name={'maxWidth'} onChange={(value: number) => handleOptionChange({ maxWidth: value })} type={'number'} max={1500} min={0} />
        </div>
    );
}

export default WidthOptions;