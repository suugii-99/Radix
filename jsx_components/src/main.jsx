// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Importera grundläggande CSS-stilar
import App from './App.jsx'; // Importera din huvudkomponent

// Skapa rot för React-applikationen och rendera den
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
