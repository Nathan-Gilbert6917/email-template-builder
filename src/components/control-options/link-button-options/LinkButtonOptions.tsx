import React, { FC, useState } from 'react';

import './LinkButtonOptions.css';
import TextInput from '../../inputs/text-input/TextInput';

export interface LinkButtonValueTypes {
    hrefLink: string;
    imageSrc: string;
}

interface LinkButtonOptionsProps {
   values: LinkButtonValueTypes,
   onChange: (value: LinkButtonValueTypes) => void;
}

const LinkButtonOptions: FC<LinkButtonOptionsProps> = (
    { values, onChange }
) => {

    const [linkButtonOptionValues, setLinkButtonOptionValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<LinkButtonValueTypes>) => {
        const newValues: LinkButtonValueTypes = { ...linkButtonOptionValues, ...changedValues };
        setLinkButtonOptionValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <TextInput label={'Link'} type={'text'} value={linkButtonOptionValues.hrefLink} name={'hrefLink'} onChange={(value: string) => handleOptionChange({ hrefLink: value })} />
            <TextInput label={'Image Src'} type={'text'} value={linkButtonOptionValues.imageSrc} name={'imageSrc'} onChange={(value: string) => handleOptionChange({ imageSrc: value })} />
        </div>
    );
}

export default LinkButtonOptions;