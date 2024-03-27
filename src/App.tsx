import React, { useState } from 'react';

import './App.css';
import TemplateRenderer from './components/containers/template-renderer/TemplateRenderer';
import TemplateCreator from './components/containers/template-creator/TemplateCreator';
import { FragmentTypes, FragmentValues } from './components/containers/fragment-list/fragment-list-item/FragmentListItem';

const App = () => {

    const [fragmentList, setFragmentList] = useState<FragmentValues[]>([]);

    const handleAddToFragmentList = (fragment: FragmentValues) => {
        setFragmentList(prevState => [...prevState, fragment]);
    }

    const handleUpdateFragmentList = (fragments: FragmentValues[]) => {
        setFragmentList(fragments);
    }

    return (
        <div className="App">
            <div className='half-app-left'>
                <TemplateCreator fragments={fragmentList} onAddFragment={handleAddToFragmentList} onFragmentListUpdate={handleUpdateFragmentList} />
            </div>
            <div className='half-app-right'>
                {/* <TemplateRenderer /> */}
                {/* <Apping/> */}
            </div>
        </div>
    );
}

export default App;
