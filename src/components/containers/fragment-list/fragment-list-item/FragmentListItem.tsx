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

export type FragmentTypes = HeaderFragmentValues | ParagraphFragmentValues | LinkButtonFragmentValues | ImageFragmentValues;

export interface FragmentValues {
  id: string;
  content: FragmentTypes;
}

interface FragmentListItemProps {
    id: string;
    content: FragmentTypes;
    onDragStart: (e: DragEvent<HTMLDivElement>, id: string) => void;
}

const FragmentListItem: FC<FragmentListItemProps> = (
    { id, content, onDragStart } 
) => {

    const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
        onDragStart(e, id);
    };

    const [hideIcon, setHideIcon] = useState(true); 

    const handleHideClick = () => {
        setHideIcon(!hideIcon);
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
                    <IconButton color={"#11111188"} icon={<FontAwesomeIcon icon={faEdit} />} onClick={()=>{alert('Edit '+id)}} />
                </span>
                <span className='fragment-item-delete-icon'>
                    <IconButton color={"#11111188"} icon={<FontAwesomeIcon icon={faTrash} />} onClick={()=>{alert('Trash '+id)}} />
                </span>
            </span>
        </div>
    );
}

export default FragmentListItem;