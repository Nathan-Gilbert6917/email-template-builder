import React, { FC, DragEvent, useState } from 'react';

import './FragmentListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEdit, faEye, faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../inputs/icon-button/IconButton';
import { HeaderFragmentValues } from '../../../fragment-options/header/HeaderFragment';
import { ImageFragmentValues } from '../../../fragment-options/image/ImageFragment';
import { LinkButtonFragmentValues } from '../../../fragment-options/link-button/LinkButtonFragment';
import { ParagraphFragmentValues } from '../../../fragment-options/paragraph/ParagraphFragment';
import { fragmentTypeText } from '../../template-creator/TemplateCreator';

export type FragmentTypes = InProgressFragment | HeaderFragmentValues | ParagraphFragmentValues | LinkButtonFragmentValues | ImageFragmentValues;

interface InProgressFragment {
    type: "in-progress";
}

export interface FragmentValues {
  id: string;
  content: FragmentTypes;
}

interface FragmentListItemProps {
    id: string;
    content: FragmentTypes;
    onEdit: (content: FragmentTypes, id:string) => void;
    onDelete: (id:string) => void;
    onDragStart: (e: DragEvent<HTMLDivElement>, id: string) => void;
}

const FragmentListItem: FC<FragmentListItemProps> = (
    { id, content, onEdit, onDelete, onDragStart } 
) => {

    const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
        onDragStart(e, id);
    };

    const [hideIcon, setHideIcon] = useState(true); 

    const handleHideClick = () => {
        setHideIcon(!hideIcon);
    }

    const handleEditClick = () => {
        onEdit(content, id);
    }

    const handleDeleteClick = () => {
        onDelete(id);
    }

    const name = () => {
        return fragmentTypeText(content.type);
    }

    return (
        <div className='fragment-item-box' draggable id={id.toString()} onDragStart={handleDragStart}>
            <span className='fragment-item-front-content'>
                <span className='fragment-item-drag-icon'>
                    <FontAwesomeIcon icon={faBars} />
                </span>
                <span className='fragment-item-content'>
                    {name()}
                </span>
            </span>
            <span className='fragment-item-icon-group'>
                <span className='fragment-item-hide-icon'>
                    <IconButton color={"#11111188"} icon={<FontAwesomeIcon icon={hideIcon ? faEye: faEyeSlash} />} onClick={handleHideClick}/>
                </span>
                <span className='fragment-item-edit-icon'>
                    <IconButton color={"#11111188"} icon={<FontAwesomeIcon icon={faEdit} />} onClick={handleEditClick} />
                </span>
                <span className='fragment-item-delete-icon'>
                    <IconButton color={"#11111188"} icon={<FontAwesomeIcon icon={faTrash} />} onClick={handleDeleteClick} />
                </span>
            </span>
        </div>
    );
}

export default FragmentListItem;