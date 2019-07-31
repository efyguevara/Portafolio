import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <header >
        <Navbar />
      </header>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>EN CONSTRUCCION</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
    </>
  );
}

export default App;
