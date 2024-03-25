import React, { FC, useState } from 'react';

import './ShadowOptions.css';
import NumberInput from '../../inputs/number-input/NumberInput';
import ColorInput from '../../inputs/color-input/ColorInput';
import CheckBox from '../../inputs/checkbox/CheckBox';

export interface ShadowValueTypes {
    horizontalOffset: number;
    verticalOffset: number;
    blurRadius: number;
    spreadRadius: number;
    shadowColor: string;
    shadowInset: boolean;
}

interface ShadowOptionsProps {
    values: ShadowValueTypes
    onChange: (value: ShadowValueTypes) => void;
}

const ShadowOptions: FC<ShadowOptionsProps> = (
    { values, onChange }
) => {

    const [shadowOptionValues, setShadowOptionValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<ShadowValueTypes>) => {
        const newValues: ShadowValueTypes = { ...shadowOptionValues, ...changedValues };
        setShadowOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <NumberInput label={'Horizontal Offset'} value={values.horizontalOffset} type={'number'} name={'horizontalOffset'} max={100} min={-100} onChange={(value: number) => handleOptionChange({ horizontalOffset: value })}/>
            <NumberInput label={'Vertical Offset'} value={values.verticalOffset} type={'number'} name={'verticalOffset'} max={100} min={100} onChange={(value: number) => handleOptionChange({ verticalOffset: value })}/>
            <NumberInput label={'Blur Radius'} value={values.blurRadius} type={'number'} name={'blurRadius'} max={100} min={-100} onChange={(value: number) => handleOptionChange({ blurRadius: value })}/>
            <NumberInput label={'Spread Radius'} value={values.spreadRadius} type={'number'} name={'spreadRadius'} max={100} min={-100} onChange={(value: number) => handleOptionChange({ spreadRadius: value })}/>
            <ColorInput label={'Shadow Color'} value={values.shadowColor} onChange={(value: string) => handleOptionChange({ shadowColor: value })} />
            <CheckBox label={'Inset Shadow'} checked={values.shadowInset} onChange={(value: boolean) => handleOptionChange({ shadowInset: value })} />
        </div>
    );
}

export default ShadowOptions;