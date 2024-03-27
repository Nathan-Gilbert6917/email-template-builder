import React, { FC, useState } from 'react';

import './ParagraphFragment.css';
import TextOptions, { TextOptionValues } from '../../control-options/text-options/TextOptions';
import TextDecorationOptions, { TextDecorationOptionValues } from '../../control-options/text-decoration-options/TextDecorationOptions';
import AlignmentOptions, { AlignmentStyleType } from '../../control-options/alignment-options/AlignmentOptions';
import BackgroundOptions, { BackgroundOptionValues } from '../../control-options/background-options/BackgroundOptions';
import PaddingOptions, { PaddingOptionValues } from '../../control-options/spacing-options/padding-options/PaddingOptions';
import MarginOptions, { MarginOptionValues } from '../../control-options/spacing-options/margin-options/MarginOptions';
import WidthOptions, { WidthOptionValues } from '../../control-options/sizing-options/width-options/WidthOptions';
import HeightOptions, { HeightOptionValues } from '../../control-options/sizing-options/height-options/HeightOptions';


export interface ParagraphFragmentValues {
    type: "paragraph",
    textValues?: TextOptionValues,
    textDecorationValues: TextDecorationOptionValues,
    alignmentValue?: AlignmentStyleType,
    backgroundValues?: BackgroundOptionValues,
    paddingValues?: PaddingOptionValues,
    marginValues?: MarginOptionValues,
    widthValues: WidthOptionValues,
    heightValues: HeightOptionValues
}

interface ParagraphFragmentProps {
    values: ParagraphFragmentValues;
    onChange: (value: ParagraphFragmentValues) => void;
}

const ParagraphFragment: FC<ParagraphFragmentProps> = (
    { values, onChange }
) => {

    const [ParagraphFragmentValues, setParagraphFragmentValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<ParagraphFragmentValues>) => {
        const newValues: ParagraphFragmentValues = { ...ParagraphFragmentValues, ...changedValues };
        setParagraphFragmentValues(newValues);
        onChange(newValues);
    };

    return (
        <div className='paragraph-fragment-box'>
            <TextOptions values={values.textValues} onChange={(values:TextOptionValues) => handleOptionChange({ textValues: values })} />
            <TextDecorationOptions values={values.textDecorationValues} onChange={(values:TextDecorationOptionValues) => handleOptionChange({ textDecorationValues: values })} />
            <AlignmentOptions value={values.alignmentValue} onChange={(value:AlignmentStyleType) => handleOptionChange({ alignmentValue: value })} />
            <BackgroundOptions values={values.backgroundValues} onChange={(values:BackgroundOptionValues) => handleOptionChange({ backgroundValues: values })} />
            <PaddingOptions values={values.paddingValues} onChange={(values:PaddingOptionValues) => handleOptionChange({ paddingValues: values })} />
            <MarginOptions values={values.marginValues} onChange={(values:MarginOptionValues) => handleOptionChange({ marginValues: values })} />
            <WidthOptions values={values.widthValues} onChange={(values:WidthOptionValues) => handleOptionChange({ widthValues: values })} />
            <HeightOptions values={values.heightValues} onChange={(values:HeightOptionValues) => handleOptionChange({ heightValues: values })} />
        </div>
    );
}

export default ParagraphFragment;