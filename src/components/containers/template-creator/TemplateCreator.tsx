import React, { FC, useState } from 'react';

import './TemplateCreator.css';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import GeneralButton from '../../inputs/general-button/GeneralButton';
import ParagraphFragment, { ParagraphFragmentValues } from '../../fragment-options/paragraph/ParagraphFragment';
import TemplateRenderer from '../template-renderer/TemplateRenderer';
import DropDownSelect, { DropDownSelectValue } from '../../inputs/dropdown-select/DropDownSelect';
import HeaderFragment, { HeaderFragmentValues } from '../../fragment-options/header/HeaderFragment';
import LinkButtonFragment, { LinkButtonFragmentValues } from '../../fragment-options/link-button/LinkButtonFragment';
import ImageFragment, { ImageFragmentValues } from '../../fragment-options/image/ImageFragment';
import { FragmentValues } from '../fragment-list/fragment-list-item/FragmentListItem';
import FragmentList from '../fragment-list/FragmentList';
import { v4 as uuidv4 } from 'uuid';
import { TextDecorationOptionValues } from '../../control-options/text-decoration-options/TextDecorationOptions';


type FragmentType = "in-progress" | "header" | "paragraph" | "link-button" | "image";

export const isFragmentType = (value: string): value is FragmentType => {
    return ["header", "paragraph", "link-button", "image"].includes(value);
};

const fragmentOptions:DropDownSelectValue[] = [
    { text: 'Header', value: 'header' },
    { text: 'Paragraph', value: 'paragraph' },
    { text: 'Link Button', value: 'link-button' },
    { text: 'Image', value: 'image' },
];

export const fragmentTypeText = (type: FragmentType) => { 
    return fragmentOptions.filter(({text, value}) => {
        if (isFragmentType(value) && value === type) {
            return text;
        }
        return false;
    })[0].text;
}

interface TemplateCreatorProps {
    fragments: FragmentValues[];
    onAddFragment: (value: FragmentValues) => void;
    onFragmentListUpdate: (value: FragmentValues[]) => void;
}

const TemplateCreator: FC<TemplateCreatorProps> = (
    { fragments, onAddFragment, onFragmentListUpdate }
) => {

    const initialInProgressFragment: FragmentValues = {
        id: "fragment-inprogress",
        content: {
            type: "in-progress"
        }
    }

    const [showModal, setShowModal] = useState<boolean>(false);
    const [fragmentTypeSelected, setFragmentTypeSelected] = useState<FragmentType>("header");
    const [fragmentInProgress, setFragmentInProgress] = useState<FragmentValues>(initialInProgressFragment);
    

    const handleModalShow = () => {
        setShowModal(prevState => (!prevState));
    }

    const handleFragmentTypeUpdate = (value: string) => {
        if (isFragmentType(value)) {
            setFragmentTypeSelected(value);
        }
    }

    const handleFragmentUpdate = (values:any) => {
        setFragmentInProgress(prevState => ({...prevState, id: uuidv4(), content: values}));
    }

    const handleAddFragment = () => {
        handleModalShow();
    }

    const handleModalDone = () => {
        if (fragmentInProgress.id !== "fragment-inprogress" && fragmentInProgress.content.type !== "in-progress") {
            onAddFragment(fragmentInProgress);
            setFragmentInProgress(initialInProgressFragment);
            handleModalShow();
        }
    }

    const initalTextDecorationValues:TextDecorationOptionValues = {
        values: {
            underlined: false,
            lineThrough: false,
            overline: false,
        },
        style: "solid",
        color: "#000000",
        size: 0
    }

    const headerFragmentState:HeaderFragmentValues = {
        type: 'header',
        widthValues: { width: 100, percentWidth: false },
        heightValues: { height: 100, percentHeight: false }
    }

    const paragraphFragmentState:ParagraphFragmentValues = {
        type: 'paragraph',
        textDecorationValues: initalTextDecorationValues,
        widthValues: { width: 100, percentWidth: false },
        heightValues: { height: 100, percentHeight: false }
    }
    
    const imageFragmentState:ImageFragmentValues = {
        type: 'image',
        imageValues: {
            imageLink: '',
            altText: ''
        },
        widthValues: { width: 100, percentWidth: false },
        heightValues: { height: 100, percentHeight: false }
    }

    const linkButtonFragmentState:LinkButtonFragmentValues = {
        type: 'link-button',
        textDecorationValues: initalTextDecorationValues,
        linkButtonValues: {
            hrefLink: ''
        },
        widthValues: { width: 100, percentWidth: false },
        heightValues: { height: 100, percentHeight: false }
    }

    const getFragmentReactElement = () => {
        if (fragmentTypeSelected === "header") {
            return <HeaderFragment values={headerFragmentState} onChange={handleFragmentUpdate} />
        }
        if (fragmentTypeSelected === "image") {
            return <ImageFragment values={imageFragmentState} onChange={handleFragmentUpdate} />
        }
        if (fragmentTypeSelected === "link-button") {
            return <LinkButtonFragment values={linkButtonFragmentState} onChange={handleFragmentUpdate} />
        }
        if (fragmentTypeSelected === "paragraph") {
            return <ParagraphFragment values={paragraphFragmentState} onChange={handleFragmentUpdate} />
        }
    }

    return (
        <div className='template-creator-box'>
            <div className='fragment-list-container'>
                <h2>Template Fragments</h2>
                <FragmentList items={fragments} onFragmentListUpdate={onFragmentListUpdate} />
            </div>
            <div className='fragment-add-container'>
                <span className='fragment-type-dropdown'>
                    <DropDownSelect label={'Fragment Type'} value={fragmentTypeSelected} options={fragmentOptions} onChange={handleFragmentTypeUpdate} />
                </span>
                <GeneralButton label={'Add Fragment'} onClick={handleAddFragment} />
            </div>
            <ModalOverlay title={`${fragmentTypeText(fragmentTypeSelected)} Fragment Designer`} show={showModal} handleClose={handleModalShow} handleDone={handleModalDone}>
                {getFragmentReactElement()}
                <TemplateRenderer fragment={fragmentInProgress} />
            </ModalOverlay>
        </div>
    );
}

export default TemplateCreator;