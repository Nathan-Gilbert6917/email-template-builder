import React, { FC, useState } from 'react';

import './TemplateCreator.css';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import GeneralButton from '../../inputs/general-button/GeneralButton';
import ParagraphFragment, { ParagraphFragmentValues } from '../../fragment-options/paragraph/ParagraphFragment';
import TemplateRenderer from '../template-renderer/TemplateRenderer';
import DropDownSelect, { DropDownSelectValue } from '../../inputs/dropdown-select/DropDownSelect';
import { HeaderFragmentValues } from '../../fragment-options/header/HeaderFragment';
import { LinkButtonFragmentValues } from '../../fragment-options/link-button/LinkButtonFragment';
import { ImageFragmentValues } from '../../fragment-options/image/ImageFragment';
import { FragmentValues } from '../fragment-list/fragment-list-item/FragmentListItem';
import FragmentList from '../fragment-list/FragmentList';


type FragmentType = "header" | "paragraph" | "link-button" | "image";

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
}

const TemplateCreator: FC<TemplateCreatorProps> = (
) => {

    const headerFragmentState:HeaderFragmentValues = {
        type: 'header',
        widthValues: { width: 100, percentWidth: false },
        heightValues: { height: 100, percentHeight: false }
    }

    const paragraphFragmentState:ParagraphFragmentValues = {
        type: 'paragraph',
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
        linkButtonValues: {
            hrefLink: ''
        },
        widthValues: { width: 100, percentWidth: false },
        heightValues: { height: 100, percentHeight: false }
    }

    const fragmentList: FragmentValues[] = [
        {
            id: "Id4",
            content: headerFragmentState
        },
        {
            id: "Id5",
            content: paragraphFragmentState
        },
        {
            id: "Id1",
            content: imageFragmentState
        },
        {
            id: "Id8",
            content: linkButtonFragmentState
        }
    ]

    const intialState: {
        showModal: boolean;
        fragmentTypeSelected: FragmentType;
        fragmentList: FragmentValues[];
    } = {
        showModal: false,
        fragmentTypeSelected: "header",
        fragmentList: fragmentList,
    }

    const [templateCreationState, setTemplateCreationState] = useState(intialState);

    const handleModalShow = () => {
        setTemplateCreationState({...templateCreationState, showModal: !templateCreationState.showModal});
    }

    const handleModalDone = () => {
        handleModalShow();
    }

    const handleFragmentTypeUpdate = (value: string) => {
        if (isFragmentType(value)) {
            setTemplateCreationState({...templateCreationState, fragmentTypeSelected: value});
        }
    }

    const handleFragmentUpdate = (values: ParagraphFragmentValues) => {
        // setTemplateCreationState({...templateCreationState, fragment: values});
    }

    const fragmentValues: ParagraphFragmentValues = {
        type: "paragraph",
        widthValues: {
            width: 100,
            percentWidth: false
        },
        heightValues: {
            height: 100,
            percentHeight: false
        }
    }

    

    
    return (
        <div className='template-creator-box'>
            <div className='fragment-list-container'>
                <h2>Template Fragments</h2>
                <FragmentList items={fragmentList} />
            </div>
            <div className='fragment-add-container'>
                <DropDownSelect label={'Fragment Type'} value={templateCreationState.fragmentTypeSelected} options={fragmentOptions} onChange={handleFragmentTypeUpdate} />
                <GeneralButton label={'Add Fragment'} onClick={handleModalShow} />
            </div>
            <ModalOverlay title={`${fragmentTypeText(templateCreationState.fragmentTypeSelected)} Fragment Designer`} show={templateCreationState.showModal} handleClose={handleModalShow} handleDone={handleModalDone}>
                <ParagraphFragment values={fragmentValues} onChange={handleFragmentUpdate} />
                <TemplateRenderer/>
            </ModalOverlay>
        </div>
    );
}

export default TemplateCreator;