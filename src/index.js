import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App.js';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
