import React, { FC, useState } from 'react';

import './ShadowOptions.css';
import NumberInput from '../../inputs/number-input/NumberInput';
import ColorInput from '../../inputs/color-input/ColorInput';
import CheckBox from '../../inputs/checkbox/CheckBox';

export interface ShadowOptionValues {
    horizontalOffset?: number;
    verticalOffset?: number;
    blurRadius?: number;
    spreadRadius?: number;
    shadowColor: string;
    shadowInset: boolean;
}

interface ShadowOptionsProps {
    values?: ShadowOptionValues
    onChange: (value: ShadowOptionValues) => void;
}

const ShadowOptions: FC<ShadowOptionsProps> = (
    { values, onChange }
) => {

    const initialShadowValue: ShadowOptionValues = {
        shadowColor: "#000000",
        shadowInset: false
    }

    const [shadowOptionValues, setShadowOptionValues] = useState(values?values:initialShadowValue);

    const handleOptionChange = (changedValues: Partial<ShadowOptionValues>) => {
        const newValues: ShadowOptionValues = { ...shadowOptionValues, ...changedValues };
        setShadowOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <NumberInput label={'Horizontal Offset'} value={shadowOptionValues.horizontalOffset} type={'number'} name={'horizontalOffset'} max={100} min={-100} onChange={(value: number) => handleOptionChange({ horizontalOffset: value })}/>
            <NumberInput label={'Vertical Offset'} value={shadowOptionValues.verticalOffset} type={'number'} name={'verticalOffset'} max={100} min={-100} onChange={(value: number) => handleOptionChange({ verticalOffset: value })}/>
            <NumberInput label={'Blur Radius'} value={shadowOptionValues.blurRadius} type={'number'} name={'blurRadius'} max={100} min={-100} onChange={(value: number) => handleOptionChange({ blurRadius: value })}/>
            <NumberInput label={'Spread Radius'} value={shadowOptionValues.spreadRadius} type={'number'} name={'spreadRadius'} max={100} min={-100} onChange={(value: number) => handleOptionChange({ spreadRadius: value })}/>
            <ColorInput label={'Shadow Color'} value={shadowOptionValues.shadowColor} onChange={(value: string) => handleOptionChange({ shadowColor: value })} />
            <CheckBox label={'Inset Shadow'} checked={shadowOptionValues.shadowInset} onChange={(value: boolean) => handleOptionChange({ shadowInset: value })} />
        </div>
    );
}

export default ShadowOptions;