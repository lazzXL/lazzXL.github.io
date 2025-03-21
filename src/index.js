import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ColorProvider } from './colorPicker/ColorProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorProvider>
    <HashRouter>
      <App />
    </HashRouter>
    </ColorProvider>
  </React.StrictMode>
);