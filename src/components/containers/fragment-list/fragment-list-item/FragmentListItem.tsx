import React, { FC, DragEvent, useState } from 'react';

import './FragmentListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEdit, faEye, faEyeSlash, faTrash } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../inputs/icon-button/IconButton';

export interface FragmentListItemValues {
    id: string;
    content: string;
}

interface FragmentListItemProps {
    id: string;
    content: string;
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

    return (
        <div className='fragment-item-box' draggable id={id.toString()} onDragStart={handleDragStart}>
            <span className='fragment-item-front-content'>
                <span className='fragment-item-drag-icon'>
                    <FontAwesomeIcon icon={faBars} />
                </span>
                <span className='fragment-item-content'>
                    {content}
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