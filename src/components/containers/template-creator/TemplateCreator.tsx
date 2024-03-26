import React, { FC, useState } from 'react';

import './TemplateCreator.css';
import FragmentList from '../fragment-list/FragmentList';
import { FragmentListItemValues } from '../fragment-list/fragment-list-item/FragmentListItem';
import ModalOverlay from '../modal-overlay/ModalOverlay';
import GeneralButton from '../../inputs/general-button/GeneralButton';
import ParagraphFragment, { ParagraphFragmentValues } from '../../fragment-options/paragraph/ParagraphFragment';

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

    return (
        <div className='template-creator-box'>
            <div>
                <FragmentList items={fragmentList} />
                <GeneralButton label={'Add Fragment'} onClick={handleModalShow} />
            </div>
            
            <ModalOverlay title={'Fragment Designer'} show={showModal} handleClose={handleModalShow} handleDone={handleModalDone}>
                <ParagraphFragment values={fragmentValues} onChange={handleFragmentUpdate} />
            </ModalOverlay>
        </div>
    );
}

export default TemplateCreator;