import React, { useState } from 'react';
import './App.css';

interface ICard{
  id: number;
  card: string;
}

function App() {
  return (
  <div className="grid-container">
    
    <AllCards />

    {/* 
    <Card id={2} card={cardTypes[1]}/>
    <div className="grid-item">3</div>
    <div className="grid-item">4</div>
    <div className="grid-item">5</div>
    <div className="grid-item">6</div>
    <div className="grid-item">7</div>
    <div className="grid-item">8</div>
    <div className="grid-item">9</div>
    <div className="grid-item">10</div>
    <div className="grid-item">11</div>
    <div className="grid-item">12</div> */}
  </div>
  );
}



export default App;

let selectedCards: string[];

const Card: React.FC<ICard> = props => {
//function Card (prop: any) {
  const { card } = props;

  const [show, setShow] = useState(false);
  const [matched, setMatched] = useState(false);
  const flip = () => {
    if(!matched){
      setShow(!show);
      
    }else alert("Already matched");
  }
  return (
    <div className={"grid-item"} onClick={() => flip()}>
      {(() => {
        if (show) {
         return (<div className="showing">{card}</div>);
        }
      })()}
    </div>
  );
}


const AllCards: React.FC = () => {
  const cardTypes: Array<string> =["apple", "orange", "banana", "pear", "coconut", "strawberry", "mango", "blueberry"];

  let cardDeck: Array<string> = cardTypes.concat(cardTypes); // this just produces a new array with two of each type
  cardDeck.sort(() => Math.random() - 0.5);

  return (
    <>
      {cardDeck.map((value, index) => {
        return  <Card id={index} card={value}/>
      })}
    </>
  )
}