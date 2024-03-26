import React from 'react';

import './App.css';
import TemplateRenderer from './components/containers/template-renderer/TemplateRenderer';
import TemplateCreator from './components/containers/template-creator/TemplateCreator';

const App = () => {

    return (
        <div className="App">
            <div className='half-app'>
                <TemplateCreator />
            </div>
            <div className='half-app'>
                <TemplateRenderer />
            </div>
        </div>
    );
}

export default App;
