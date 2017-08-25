import React from 'react';
import ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';


initReactFastclick();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
