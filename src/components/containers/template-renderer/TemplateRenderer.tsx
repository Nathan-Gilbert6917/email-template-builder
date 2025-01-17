import React, { FC } from 'react';

import './TemplateRenderer.css';
import { FragmentValues } from '../fragment-list/fragment-list-item/FragmentListItem';
import HeaderRender from '../../rendered-fragment/header-render/HeaderRender';

interface TemplateRendererProps {
    fragment: FragmentValues
}

const TemplateRenderer: FC<TemplateRendererProps> = (
    { fragment }
) => {

    const render = () => {
        if (fragment.content.type === "header") {
            return <HeaderRender values={fragment.content} />
        }
    }

    return (
        <div className='template-renderer'>
            {render()}
        </div>
    );
}

export default TemplateRenderer;