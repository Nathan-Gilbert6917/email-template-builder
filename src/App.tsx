import React from 'react';

import './App.css';
import TemplateRenderer from './components/containers/template-renderer/TemplateRenderer';
import TemplateCreator from './components/containers/template-creator/TemplateCreator';
import Apping from './Apping';

const App = () => {

    return (
        <div className="App">
            <div className='half-app-left'>
                <TemplateCreator />
            </div>
            <div className='half-app-right'>
                <TemplateRenderer />
                {/* <Apping/> */}
            </div>
        </div>
    );
}

export default App;
