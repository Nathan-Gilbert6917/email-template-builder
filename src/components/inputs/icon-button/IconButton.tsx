import React, { FC, useState } from 'react';

import './IconButton.css';


interface IconButtonProps {
    icon: React.ReactNode;
    color?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: FC<IconButtonProps> = (
    {icon, color, onClick}
) => {
    return (
        <button className="icon-button" style={{color: color ? color: "#000000"}} onClick={onClick}>
            {icon}
        </button>
    );
}

export default IconButton;