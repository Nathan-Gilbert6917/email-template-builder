import React, { FC, useState } from 'react';

import './HeaderFragment.css';
import HeaderOptions, { HeaderOptionValues } from '../../control-options/header-options/HeaderOptions';
import TextOptions, { TextOptionValues } from '../../control-options/text-options/TextOptions';
import TextDecorationOptions, { TextDecorationOptionValues } from '../../control-options/text-decoration-options/TextDecorationOptions';
import AlignmentOptions, { AlignmentStyleType } from '../../control-options/alignment-options/AlignmentOptions';
import BackgroundOptions, { BackgroundOptionValues } from '../../control-options/background-options/BackgroundOptions';
import PaddingOptions, { PaddingOptionValues } from '../../control-options/spacing-options/padding-options/PaddingOptions';
import MarginOptions, { MarginOptionValues } from '../../control-options/spacing-options/margin-options/MarginOptions';
import WidthOptions, { WidthOptionValues } from '../../control-options/sizing-options/width-options/WidthOptions';
import HeightOptions, { HeightOptionValues } from '../../control-options/sizing-options/height-options/HeightOptions';


export interface HeaderFragmentValues {
    type: "header",
    headerValue?: HeaderOptionValues,
    textValues?: TextOptionValues,
    textDecorationValues?: TextDecorationOptionValues,
    alignmentValue?: AlignmentStyleType,
    backgroundValues?: BackgroundOptionValues,
    paddingValues?: PaddingOptionValues,
    marginValues?: MarginOptionValues,
    widthValues: WidthOptionValues,
    heightValues: HeightOptionValues
}

interface HeaderFragmentProps {
    values: HeaderFragmentValues;
    onChange: (value: HeaderFragmentValues) => void;
}

const HeaderFragment: FC<HeaderFragmentProps> = (
    { values, onChange }
) => {

    const [headerFragmentValues, setHeaderFragmentValues] = useState(values);

    const handleOptionChange = (changedValues: Partial<HeaderFragmentValues>) => {
        const newValues: HeaderFragmentValues = { ...headerFragmentValues, ...changedValues };
        setHeaderFragmentValues(newValues);
        onChange(newValues);
    };

    return (
        <div className='header-fragment-box'>
            <HeaderOptions value={values.headerValue} onChange={(value:HeaderOptionValues) => handleOptionChange({ headerValue: value })} />
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

export default HeaderFragment;