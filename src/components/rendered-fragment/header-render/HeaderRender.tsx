import React, { FC } from 'react';

import { HeaderFragmentValues } from '../../fragment-options/header/HeaderFragment';
import { ShadowOptionValues } from '../../control-options/shadow-options/ShadowOptions';

interface HeaderRenderProps {
    values: HeaderFragmentValues
}

const HeaderRender: FC<HeaderRenderProps> = (
    { values }
) => {
    const { 
        headerValue, 
        textValues, 
        textDecorationValues, 
        alignmentValue, 
        backgroundValues, 
        paddingValues, 
        marginValues, 
        widthValues, 
        heightValues  
    } = values;

    const createBoxShadow = (values: ShadowOptionValues|undefined) =>{
        if (values) {
            const { horizontalOffset, verticalOffset, blurRadius, spreadRadius, shadowColor, shadowInset } = values;
        
            return `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor} ${shadowInset?'inset':''}`;
        }
        return '';
    }

    const createSizing = (value: number | undefined, isPercent: boolean) => {
        if (value !== undefined) {
            return `${value} ${isPercent?'%':'px'}`;
        }
    }

    const createTextDecorationLine = (underlined:boolean | undefined, lineThrough:boolean | undefined, overline:boolean | undefined) => {
        return `${underlined?'underline':''} ${lineThrough?'line-through':''} ${overline?'overline':''}`;
    }

    const handleStyling = ():React.CSSProperties => {
        
        return {
            fontFamily: textValues?.font,
            fontSize:textValues?.fontSize,
            color: textValues?.textColor,
            fontWeight: (textValues?.boldText ? 'bold' : 'normal'),
            fontStyle: textValues?.textStyle,
            textDecorationColor: textDecorationValues?.color,
            textDecorationThickness: textDecorationValues?.size,
            textDecorationLine: createTextDecorationLine(textDecorationValues?.values.underlined, textDecorationValues?.values.lineThrough, textDecorationValues?.values.overline),
            textDecorationStyle: textDecorationValues?.style,
            textAlign: alignmentValue,
            backgroundColor: backgroundValues?.backgroundColor,
            borderRadius: backgroundValues?.borderRadius,
            borderColor: backgroundValues?.borderSelected ? backgroundValues?.border.borderColor: "#000000",
            borderWidth: backgroundValues?.borderSelected ? backgroundValues?.border.borderSize: 0,
            borderStyle: backgroundValues?.borderSelected ? backgroundValues?.border.borderType: "solid",
            boxShadow: backgroundValues?.shadowSelected ? createBoxShadow(backgroundValues?.shadow):"",
            paddingLeft: paddingValues?.PaddingLeft,
            paddingTop: paddingValues?.PaddingTop,
            paddingRight: paddingValues?.PaddingRight,
            paddingBottom: paddingValues?.PaddingBottom,
            marginLeft: marginValues?.marginLeft,
            marginTop: marginValues?.marginTop,
            marginRight: marginValues?.marginRight,
            marginBottom: marginValues?.marginBottom,
            height: createSizing(heightValues.height, heightValues.percentHeight),
            minHeight: createSizing(heightValues.minHeight, false),
            maxHeight: createSizing(heightValues.maxHeight, false),
            width: createSizing(widthValues.width, widthValues.percentWidth),
            minWidth: createSizing(widthValues.minWidth, false),
            maxWidth: createSizing(widthValues.maxWidth, false)
        }
    }

    const constructRender = (type: string | undefined, content: string | undefined) => {
        const styling = handleStyling();
        if (type === 'h1') {
            return (
                <h1 style={styling}>
                    {content}
                </h1>
            );
        }   
        if (type === 'h2') {
            return (
                <h2 style={styling}>
                    {content}
                </h2>
            );
        }
        if (type === 'h3') {
            return (
                <h3 style={styling}>
                    {content}
                </h3>
            );
        }
        if (type === 'h4') {
            return (
                <h4 style={styling}>
                    {content}
                </h4>
            );
        }
        if (type === 'h5') {
            return (
                <h5 style={styling}>
                    {content}
                </h5>
            );
        }
        if (type === 'h6') {
            return (
                <h6 style={styling}>
                    {content}
                </h6>
            );
        }
    }

    return (
        <>
            {constructRender(headerValue?.type, textValues?.text)}
        </>
    );
}

export default HeaderRender;