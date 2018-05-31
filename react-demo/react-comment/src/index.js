import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './pages/comment/comment.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Comment />, document.getElementById('root'));
registerServiceWorker();
