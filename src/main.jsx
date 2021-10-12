import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReactReduxProvider } from './contexts/store';

ReactDOM.render(
    <React.StrictMode>
        <ReactReduxProvider>
            <App />
        </ReactReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
