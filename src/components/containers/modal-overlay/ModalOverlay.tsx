import React, { FC, ReactNode } from 'react';

import './ModalOverlay.css';

import GeneralButton from '../../inputs/general-button/GeneralButton';

interface ModalOverlayProps { 
    title: string; 
    show: boolean; 
    children: ReactNode; 
    handleClose: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = (
    { title, handleClose, show, children }
) => {
    const showHideClassName = show ? "modal-container display-block" : "modal-container display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main-container">
                <div className="modal-header-container">
                    <h1 className="modal-title">{title}</h1>
                </div>
                <div className="modal-content-container">
                    {children}
                </div>  
                <div className="modal-footer-container">
                    <GeneralButton label="Done" onClick={handleClose}/>
                    <GeneralButton label="Cancel" isInverted onClick={handleClose}/>
                </div>
            </section>
        </div>
    );
}

export default ModalOverlay;