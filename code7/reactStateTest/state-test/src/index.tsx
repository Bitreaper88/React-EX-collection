import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';

import Main from './Main';
import About from './About';
import ModalHandler from './Modal';

const Routing: React.FC = () => {


  return (
    <Router>
      <div>
        <h1>Basic navigation</h1>
        <div className="App-header">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={"activeLink"}>Main</NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeClassName={"activeLink"}>About</NavLink>
            </li>
          </ul>
        </div>

        <Route exact path="/" component={Main} />
        <Route path="/Main" component={Main} />
        <Route path="/About" component={About} />
      </div>
    </Router>
  )
}


ReactDOM.render(

  <React.StrictMode>
    <Routing/>
    <ModalHandler param={"#99ffcc"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
