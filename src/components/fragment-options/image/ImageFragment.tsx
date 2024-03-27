import React, { FC, useState } from 'react';

import './ImageFragment.css';
import ImageOptions, { ImageOptionValues } from '../../control-options/image-options/ImageOptions';
import AlignmentOptions, { AlignmentStyleType } from '../../control-options/alignment-options/AlignmentOptions';
import BackgroundOptions, { BackgroundOptionValues } from '../../control-options/background-options/BackgroundOptions';
import PaddingOptions, { PaddingOptionValues } from '../../control-options/spacing-options/padding-options/PaddingOptions';
import MarginOptions, { MarginOptionValues } from '../../control-options/spacing-options/margin-options/MarginOptions';
import WidthOptions, { WidthOptionValues } from '../../control-options/sizing-options/width-options/WidthOptions';
import HeightOptions, { HeightOptionValues } from '../../control-options/sizing-options/height-options/HeightOptions';

export interface ImageFragmentValues {
    type: "image",
    imageValues: ImageOptionValues
    alignmentValue?: AlignmentStyleType,
    backgroundValues?: BackgroundOptionValues,
    paddingValues?: PaddingOptionValues,
    marginValues?: MarginOptionValues,
    widthValues: WidthOptionValues,
    heightValues: HeightOptionValues
}

interface ImageFragmentProps {
    values: ImageFragmentValues;
    onChange: (value: ImageFragmentValues) => void;
}

const ImageFragment: FC<ImageFragmentProps> = (
    { values, onChange }
) => {

    const [ImageFragmentValues, setImageFragmentValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<ImageFragmentValues>) => {
        const newValues: ImageFragmentValues = { ...ImageFragmentValues, ...changedValues };
        setImageFragmentValues(newValues);
        onChange(newValues);
    };

    return (
        <div>
            <ImageOptions values={values.imageValues} onChange={(value:ImageOptionValues) => handleOptionChange({ imageValues: value })} />
            <AlignmentOptions value={values.alignmentValue} onChange={(value:AlignmentStyleType) => handleOptionChange({ alignmentValue: value })} />
            <BackgroundOptions values={values.backgroundValues} onChange={(values:BackgroundOptionValues) => handleOptionChange({ backgroundValues: values })} />
            <PaddingOptions values={values.paddingValues} onChange={(values:PaddingOptionValues) => handleOptionChange({ paddingValues: values })} />
            <MarginOptions values={values.marginValues} onChange={(values:MarginOptionValues) => handleOptionChange({ marginValues: values })} />
            <WidthOptions values={values.widthValues} onChange={(values:WidthOptionValues) => handleOptionChange({ widthValues: values })} />
            <HeightOptions values={values.heightValues} onChange={(values:HeightOptionValues) => handleOptionChange({ heightValues: values })} />
        </div>
    );
}

export default ImageFragment;