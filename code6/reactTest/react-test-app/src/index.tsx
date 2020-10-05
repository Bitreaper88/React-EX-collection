import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

interface commentProp {
  author: string
  text: string
  born: number
}

interface insultProp {
  age: number
}
const Insult: React.FC<insultProp> = props => {

  const { age } = props;
  console.log(age);
  return (
    <div>
      {age >= 18 ? " I can drink beer" : " I like soda"}
    </div>
  )
}
function Comment (props: commentProp) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <div className="UserInfo-name">
        
        {props.author}
        <Insult age={2020-props.born} /> 
        </div>
        <div className="UserInfo-age">
          {2020 - props.born}
        </div>
      </div>
      <div className="Comment-text">{props.text}</div>
      {/* <div className="Comment-date"> {formatDate(props.date)}</div> */}
    </div>
  );
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>,
    <Comment
      text={"I say some shit"}
      author={"Jorma"}
      born = {2010}
    />
    <Comment
      text={"Haista paska perkel"}
      author={"Kekkonen"}
      born =  {1962}
    />
  </div>,
  document.getElementById('root')
);
