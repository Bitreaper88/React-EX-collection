import React, { useState,useEffect, useCallback  } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom';

import Main from './Main';
import About from './About';
import Bingo from './Bingo';
import ModalHandler from './Modal';
import { stringify } from 'querystring';


// interface responseObject {
//    userId: number
//    id: number
//    title: string
//    body: string
// }

const Post: React.FC = () => {

  //const firstPost = getPOST(1);
  const [post, setPost] = useState<any>()

  //const [postttt, setSetPostttt] = useState(firstPost)
  let count = 1;
  const fetchAPI = useCallback(async () => {
    let response: any = await fetch('https://jsonplaceholder.typicode.com/posts/'+count)
    response = await response.json()
    console.log(response.body);
    console.log(response.id);
    setPost(response);
    count++;
  }, [])

  useEffect(() => {
    fetchAPI()
  }, [fetchAPI])

  return (
    <div>
        {post?.title}
      <p>
        {post?.id}
      </p>
      <p>
         {post?.body}
      </p>
      <button onClick={() => fetchAPI()}>Click me</button>
    </div>
  )
};

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
    <Post/>
    <Routing/>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
