import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './routers';

function App() {
  console.log = console.warn = console.error = () => {}
  return (
    <Routers />
  );
}

export default App;
