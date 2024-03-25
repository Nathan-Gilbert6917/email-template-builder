import React, { FC, useState } from 'react';

import './BackgroundOptions.css';
import ColorInput from '../../inputs/color-input/ColorInput';
import NumberInput from '../../inputs/number-input/NumberInput';
import CheckBox from '../../inputs/checkbox/CheckBox';
import BorderOptions, { BorderValueTypes } from '../border-options/BorderOptions';
import ShadowOptions, { ShadowValueTypes } from '../shadow-options/ShadowOptions';

export interface BackgroundValues {
    backgroundColor: string;
    borderRadius: number;
    borderSelected: boolean;
    border: BorderValueTypes;
    shadowSelected: boolean;
    shadow: ShadowValueTypes;
}

interface BackgroundOptionsProps {
    values: BackgroundValues;
    onChange: (value: BackgroundValues) => void;
}

const BackgroundOptions: FC<BackgroundOptionsProps> = (
    { values, onChange }
) => {

    const [backgroundOptionValues, setBackgroundOptionValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<BackgroundValues>) => {
        const newValues: BackgroundValues = { ...backgroundOptionValues, ...changedValues };
        setBackgroundOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <ColorInput label={'Background Color'} value={backgroundOptionValues.backgroundColor} onChange={(value: string) => handleOptionChange({ backgroundColor: value })}/>
            <NumberInput label={'Border Radius'} type={'number'} name={'Border Radius'} value={backgroundOptionValues.borderRadius} max={0} min={100} onChange={(value: number) => handleOptionChange({ borderRadius: value })} />
            <CheckBox label={'Edit Border'} checked={backgroundOptionValues.borderSelected} onChange={(value: boolean) => handleOptionChange({ borderSelected: value })} />
            {backgroundOptionValues.borderSelected
                ?<BorderOptions values={backgroundOptionValues.border} onChange={(value: BorderValueTypes) => handleOptionChange({ border: value})} />
                :<></>
            }
            <CheckBox label={'Edit Shadow'} checked={backgroundOptionValues.shadowSelected} onChange={(value: boolean) => handleOptionChange({ shadowSelected: value })} />
            {backgroundOptionValues.shadowSelected 
                ?<ShadowOptions values={backgroundOptionValues.shadow} onChange={(value: ShadowValueTypes) => handleOptionChange({ shadow: value})} />
                :<></>
            }
        </div>
    );
}

export default BackgroundOptions;