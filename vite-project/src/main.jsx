import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharacterProvider } from './CharacterContext';
import App from './App';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </Router>    
  </React.StrictMode>
);
