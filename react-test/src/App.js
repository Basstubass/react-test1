import React from 'react';
import './App.css';
import Navber from './components/Nabver';
import {BrowserRouter as Router, Switch,  Route} from "react-router-dom";
// import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Navber />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />

      </Switch>
    </Router>
  );
}

export default App;
