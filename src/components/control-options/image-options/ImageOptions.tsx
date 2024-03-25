import React, { FC, useState } from 'react';

import './ImageOptions.css';
import TextInput from '../../inputs/text-input/TextInput';

export interface ImageValueTypes {
    imageLink: string;
    altText: string;
}

interface ImageOptionsProps {
   values: ImageValueTypes,
   onChange: (value: ImageValueTypes) => void;
}

const ImageOptions: FC<ImageOptionsProps> = (
    { values, onChange }
) => {

    const [imageOptionValues, setImageOptionValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<ImageValueTypes>) => {
        const newValues: ImageValueTypes = { ...imageOptionValues, ...changedValues };
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