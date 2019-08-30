import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MyNav from './components/MyNav';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Skills from './views/Skills'
import Contact from './views/Contact';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <header >
          <MyNav />
        </header>
        <div className="App">
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
