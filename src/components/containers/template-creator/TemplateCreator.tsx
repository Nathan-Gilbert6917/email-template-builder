import React, { FC } from 'react';

import './TemplateCreator.css';
import FragmentList from '../fragment-list/FragmentList';
import { FragmentListItemValues } from '../fragment-list/fragment-list-item/FragmentListItem';

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

    return (
        <div className='template-creator-box'>
            <FragmentList items={fragmentList} />
        </div>
    );
}

export default TemplateCreator;