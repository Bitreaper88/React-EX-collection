import React, { useState, useEffect, useCallback, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Bingo from './Bingo';
import Post from './Post';
import {LangProvider, LangContext} from './Localization';


const MainButtons: React.FC<any> = ({ changeLang }) => {
  
  const lang = useContext(LangContext);

  return (<>
    <ul className="App-header">

  <li className="headerText">{lang.header}</li>
        <li>
          <NavLink to="/" exact className={"navBtn"} activeClassName={"activeLink"}>Main</NavLink>
        </li>
        <li>
          <NavLink to="/about" exact className={"navBtn"} activeClassName={"activeLink"}>About</NavLink>
        </li>
        <li>
          <NavLink to="/Bingo" exact className={"navBtn"} activeClassName={"activeLink"}>Bingo</NavLink>
        </li>
        <li>
          <NavLink to="/Post" exact className={"navBtn"} activeClassName={"activeLink"}>Post</NavLink>
        </li>
        <div className="topnav-right lang">
          <select className={"navBtn lang"} onChange={e => changeLang(e.target.value)} name="lang" id="lang">
            <option value="en">English</option>
            <option value="fi">Finnsih</option>
          </select>
        </div>
      </ul>
  </>)
}

const Routing: React.FC = () => {
   const [currentLang, updateLang] = useState("en");
   const changeLang = (code: string) => {
    updateLang(code);
   };

  return (
    
    <LangProvider selected={currentLang}>
        <Router>
            <MainButtons changeLang={changeLang} />
            <Route exact path="/" component={Main} />
            <Route path="/Main" component={Main} />
            <Route path="/About" component={About} />
            <Route path="/Bingo" component={Bingo} />
            <Route path="/Post" component={Post} />
        </Router>
     </LangProvider>
   
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
