import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import HookApp from './components/HookApp';
import HookPractise from './components/HookPractise';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    {/* <App /> */}
     {/* REACT STATESTATE EXAMPLE */}
    <HookPractise />
  </React.StrictMode>
);


