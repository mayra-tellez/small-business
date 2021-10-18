import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
