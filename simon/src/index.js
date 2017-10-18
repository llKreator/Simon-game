import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Simon} from './Simon/index.js';

ReactDOM.render(<Simon />, document.getElementById('root'));
registerServiceWorker();
