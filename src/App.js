import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import StatusBar from './components/StatusBar/StatusBar';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <StatusBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
