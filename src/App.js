import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MyNav from './components/MyNav';
import Home from './views/Home';
import Proyects from './views/Proyects';
import About from './views/About';
import Skills from './views/Skills'
import Contact from './views/Contact';


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
