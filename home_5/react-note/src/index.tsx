
import React, { useState,useEffect } from "react";
import ReactDOM from 'react-dom';
import './note.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Container from "./Note"

const header = <h1>Hello there</h1>
const options = {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  hour12: false,
};

const Clock: React.FC = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", options));
  useEffect(() => {
    const timeout = setTimeout(() => {
      const date = new Date()
      setTime(date.toLocaleDateString("en-US", options));
    }, 1000);
    return () => {
      clearTimeout(timeout);
    }
  }, [time]);

  return (
    <div>
      <h2>It is {time}</h2>
    </div>
  )
};


function App() {
  return (
    <div>
      {header}
      <Clock/>
      <Container />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
