import React, { FC, useState } from 'react';

import './TemplateCreator.css';
import FragmentList from '../fragment-list/FragmentList';
import { FragmentListItemValues } from '../fragment-list/fragment-list-item/FragmentListItem';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import GeneralButton from '../../inputs/general-button/GeneralButton';
import ParagraphFragment, { ParagraphFragmentValues } from '../../fragment-options/paragraph/ParagraphFragment';
import TemplateRenderer from '../template-renderer/TemplateRenderer';
import DropDownSelect, { DropDownSelectValue } from '../../inputs/dropdown-select/DropDownSelect';

interface TemplateCreatorProps {
}

const TemplateCreator: FC<TemplateCreatorProps> = (
) => {

    const fragmentList: FragmentListItemValues[] = [
        {
            id: "Id4",
            content: "Test Fragment 1"
        },
        {
            id: "Id5",
            content: "Test Fragment 2"
        },
        {
            id: "Id1",
            content: "Test Fragment 3"
        },
        {
            id: "Id8",
            content: "Test dfsdfsdfsdfsddsfsdfsfsdffsdf 4"
        }
    ]

    const [showModal, setShowModal] = useState(false);
    const [fragmentTypeSelected, setFragmentTypeSelected] = useState("header");
    const handleModalShow = () => {
        setShowModal(!showModal);
    }

    const handleModalDone = () => {
        handleModalShow();
    }

    const handleFragmentUpdate = () => {
        
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

    const fragmentOptions:DropDownSelectValue[] = [
        { text: 'Header', value: 'header' },
        { text: 'Paragraph', value: 'paragraph' },
        { text: 'Link Button', value: 'link-button' },
        { text: 'Image', value: 'image' },
    ];

    const fragmentTypeText = fragmentOptions.filter(({value}) => value === fragmentTypeSelected)[0].text;

    return (
        <div className='template-creator-box'>
            <div className='fragment-list-container'>
                <h2>Template Fragments</h2>
                <FragmentList items={fragmentList} />
            </div>
            <div className='fragment-add-container'>
                <DropDownSelect label={'Fragment Type'} value={fragmentTypeSelected} options={fragmentOptions} onChange={setFragmentTypeSelected} />
                <GeneralButton label={'Add Fragment'} onClick={handleModalShow} />
            </div>
            <ModalOverlay title={`${fragmentTypeText} Fragment Designer`} show={showModal} handleClose={handleModalShow} handleDone={handleModalDone}>
                <ParagraphFragment values={fragmentValues} onChange={handleFragmentUpdate} />
                <TemplateRenderer/>
            </ModalOverlay>
        </div>
    );
}

export default TemplateCreator;