import React, { FC } from 'react';

import './FragmentControlPanel.css';

interface FragmentControlPanelProps {
    options: ["alignment", "background", "header", "image", "link-button", "sizing", "spacing", "text"];
}

const FragmentControlPanel: FC<FragmentControlPanelProps> = (
    { options }
) => {
    return (
        <div>
            
        </div>
    );
}

export default FragmentControlPanel;