import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const title = 'Welcome to Sound-wave'
ReactDOM.render(<App title={title} />, document.getElementById('root'));

module.hot.accept();