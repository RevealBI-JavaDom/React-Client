import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { RevealSdkSettings } from '@revealbi/ui';

RevealSdkSettings.serverUrl =  "http://localhost:5111"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //<React.StrictMode>
    <Router>
      <App />
    </Router>
  //</React.StrictMode>
);

reportWebVitals();
