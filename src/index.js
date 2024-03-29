//imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './app/store';
import ToggleColorModeProvider from './utils/ToggleColorMode';
import './index.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <Provider store = {store}>
        <ToggleColorModeProvider> //light and dark mode
            <BrowserRouter> //enable routing
                <App /> //render the app component
            </BrowserRouter>,
        </ToggleColorModeProvider>
    </Provider>,
);
