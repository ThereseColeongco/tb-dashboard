// JS entry point that takes over from index.html by finding the root and rendering the React component tree into it. Where you set up providers like BrowserRouter, global styles, etc.
// providers are components that make data available to the entire component tree below them, without passing props (properties) manually through every level
// BrowserRouter makes routing available to all components below it

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css'; // contains global styles applied everywhere
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
