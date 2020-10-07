import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Container from "./Note"



const header = <h1>Hello there, General Kenobi</h1>
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
interface Date {
  date: any
}
function Clock(props: Date) {
  const clock = (
    <div>
      {/* <h2>It is {new Date().toLocaleTimeString()}.</h2> */}
      <h2>It is {props.date.toLocaleDateString("en-US", options)}</h2>
    </div>
  );
  return clock;
}

//setInterval(Clock, 1000);

function App() {
  return (
    <div>
      {header}
      <Clock date={new Date()} />
      <Container/>
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
