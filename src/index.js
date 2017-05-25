import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
const json = require('./resume.json');
require('./styles/main.css');


ReactDOM.render(
    <App jsonObj={json} />,
    document.getElementById('root')
);
