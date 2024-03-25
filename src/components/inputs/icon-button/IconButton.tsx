import React, { FC } from 'react';

import './IconButton.css';


interface IconButtonProps {
    icon: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: FC<IconButtonProps> = (
    {icon, onClick}
) => {
    return (
        <button className="icon-button" onClick={onClick}>
            {icon}
        </button>
    );
}

export default IconButton;