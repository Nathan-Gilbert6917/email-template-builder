import React, { FC, useState } from 'react';

import './ImageOptions.css';
import TextInput from '../../inputs/text-input/TextInput';

export interface ImageOptionValues {
    imageLink: string;
    altText: string;
}

interface ImageOptionsProps {
   values: ImageOptionValues,
   onChange: (value: ImageOptionValues) => void;
}

const ImageOptions: FC<ImageOptionsProps> = (
    { values, onChange }
) => {

    const [imageOptionValues, setImageOptionValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<ImageOptionValues>) => {
        const newValues: ImageOptionValues = { ...imageOptionValues, ...changedValues };
        setImageOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <TextInput label={'Image Link'} type={'text'} value={imageOptionValues.imageLink} name={'imageLink'} onChange={(value: string) => handleOptionChange({ imageLink: value })} />
            <TextInput label={'Alt Text'} type={'text'} value={imageOptionValues.altText} name={'altText'} onChange={(value: string) => handleOptionChange({ altText: value })} />
        </div>
    );
}

export default ImageOptions;