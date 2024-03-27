import React, { FC, useState } from 'react';

import './BackgroundOptions.css';
import ColorInput from '../../inputs/color-input/ColorInput';
import NumberInput from '../../inputs/number-input/NumberInput';
import CheckBox from '../../inputs/checkbox/CheckBox';
import BorderOptions, { BorderOptionValues } from '../border-options/BorderOptions';
import ShadowOptions, { ShadowOptionValues } from '../shadow-options/ShadowOptions';

export interface BackgroundOptionValues {
    backgroundColor: string;
    borderRadius: number;
    borderSelected: boolean;
    border: BorderOptionValues;
    shadowSelected: boolean;
    shadow: ShadowOptionValues;
}

interface BackgroundOptionsProps {
    values?: BackgroundOptionValues;
    onChange: (value: BackgroundOptionValues) => void;
}

const BackgroundOptions: FC<BackgroundOptionsProps> = (
    { values, onChange }
) => {

    const initialBackgoundValues: BackgroundOptionValues = {
      backgroundColor: "#000000",
      borderRadius: 0,
      borderSelected: false,
      border: {
          borderSize: 0,
          borderType: "none",
          borderColor: "#000000",
      },
      shadowSelected: false,
      shadow: {
          horizontalOffset: 0,
          verticalOffset: 0,
          blurRadius: 0,
          spreadRadius: 0,
          shadowColor: "#000000",
          shadowInset: false,
      }
    }

    const [backgroundOptionValues, setBackgroundOptionValues] = useState(values?values:initialBackgoundValues);

    const handleOptionChange = (changedValues: Partial<BackgroundOptionValues>) => {
        const newValues: BackgroundOptionValues = { ...backgroundOptionValues, ...changedValues };
        setBackgroundOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <ColorInput label={'Background Color'} value={backgroundOptionValues.backgroundColor} onChange={(value: string) => handleOptionChange({ backgroundColor: value })}/>
            <NumberInput label={'Border Radius'} type={'number'} name={'Border Radius'} value={backgroundOptionValues.borderRadius} max={100} min={0} onChange={(value: number) => handleOptionChange({ borderRadius: value })} />
            <CheckBox label={'Edit Border'} checked={backgroundOptionValues.borderSelected} onChange={(value: boolean) => handleOptionChange({ borderSelected: value })} />
            {backgroundOptionValues.borderSelected
                ?<BorderOptions values={backgroundOptionValues.border} onChange={(value: BorderOptionValues) => handleOptionChange({ border: value})} />
                :<></>
            }
            <CheckBox label={'Edit Shadow'} checked={backgroundOptionValues.shadowSelected} onChange={(value: boolean) => handleOptionChange({ shadowSelected: value })} />
            {backgroundOptionValues.shadowSelected 
                ?<ShadowOptions values={backgroundOptionValues.shadow} onChange={(value: ShadowOptionValues) => handleOptionChange({ shadow: value})} />
                :<></>
            }
        </div>
    );
}

export default BackgroundOptions;