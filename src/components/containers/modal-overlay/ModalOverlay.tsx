import React, { FC, ReactNode } from 'react';

import './ModalOverlay.css';

import GeneralButton from '../../inputs/general-button/GeneralButton';

interface ModalOverlayProps {
    customClassName?: string;
    title: string; 
    show: boolean; 
    children?: ReactNode; 
    handleClose: () => void;
    handleDone: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = (
    { customClassName, title, handleClose, handleDone, show, children }
) => {

    const className: string = customClassName ? customClassName : "modal-container";
    const showHideClassName = show ? `${className} display-block` : `${className} display-none`;

    const handleSubmit = () => {
        handleDone();
        handleClose();
    };

    return (
        <div className={showHideClassName}>
            <div className="modal-main-container">
                <div className="modal-header-container">
                    <h1 className="modal-title">{title}</h1>
                </div>
                <div className="modal-content-container">
                    {children}
                </div>  
                <div className="modal-footer-container">
                    <GeneralButton label="Done" onClick={handleSubmit}/>
                    <GeneralButton label="Cancel" isInverted onClick={handleClose}/>
                </div>
            </div>
        </div>
    );
}

export default ModalOverlay;