import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';

import Main from './Main';
import About from './About';
import Bingo from './Bingo';
import ModalHandler from './Modal';

const Routing: React.FC = () => {
  return (
    
    <Router>
      <div>      
          <ul className="App-header">
          <li className="headerText"> Basic navigation </li>
            <li>
              <NavLink to="/" exact className={"navBtn"} activeClassName={"activeLink"}>Main</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact  className={"navBtn"} activeClassName={"activeLink"}>About</NavLink>
            </li>
            <li>
              <NavLink to="/Bingo" exact  className={"navBtn"} activeClassName={"activeLink"}>Bingo</NavLink>
            </li>
          </ul>
        <Route exact path="/" component={Main} />
        <Route path="/Main" component={Main} />
        <Route path="/About" component={About} />
        <Route path="/Bingo" component={Bingo} />
      </div>
    </Router>
  )
}


ReactDOM.render(

  <React.StrictMode>
    <Routing/>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
