import React, { useState, StrictMode  } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import './fontawesome.css';
import precarga from './precarga.js';
import Routeo from './components/Routeo'

precarga();


const root = ReactDOM.createRoot(
  document.getElementById('root')!
);

const div = document.querySelector('div')
  div.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

div.addEventListener('drop', (e) => {
  e.preventDefault()
}) 

root.render(
  
    
      <Routeo />
    
  
);