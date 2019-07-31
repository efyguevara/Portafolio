import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Proyects from './views/Proyects';
import About from './views/About';
import Skills from './views/Skills'
import Contact from './views/Contact';


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
      <BrowserRouter>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Proyects" component={Proyects} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
