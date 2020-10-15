import React, { useState, useEffect } from 'react';
import './App.css';

interface ICard{
  id: number;
  card: string;
  matched: boolean
}

function App() {
  return (
  <div className="grid-container">  
    <AllCards />
  </div>
  );
}
export default App;


let selectedCards: ICard[] = [];
let matchedCardsArray:  ICard[] = [];

const Card: React.FC<ICard> = props => {
  const {id, card, matched } = props;
 // let [selectedCards, setSelectedCards] = useState(() => selectedCardsArray);
  let [matchedCard, setMatchedCard] = useState(() => matchedCardsArray);
  const [show, setShow] = useState(false);

  
  const flip = () => {
    if(!matched){
      if (selectedCards.length < 2){
        setShow(!show);
        selectedCards.push({id, card, matched });
       // setSelectedCards(selectedCardsArray);
        console.log(selectedCards);
      }    

    }else alert("Already matched");

    if (selectedCards.length >= 2) {
      console.log("selectedCards ")
      console.log(selectedCards[0].card )
      console.log(selectedCards[1].card )

      if (selectedCards[0].card === selectedCards[1].card) {
        //setMatched(true);
        console.log("Two cards")
        selectedCards.forEach((card) => {
          matchedCardsArray.push(card)
          console.log("Push: " + card.card )
        })
        console.log("matched array" + matchedCardsArray); 
        selectedCards = new Array();
       
      }
     alert("trigger timer")
    }
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

// function Timer = () => {
//   useEffect(() => {
//     let intervalId;

//     if (true) {
//       intervalId = setInterval(() => {

//       }, 1000)
//     }
// }


const AllCards: React.FC = () => {
  const cardTypes: Array<string> =["apple", "orange", "banana", "pear", "coconut", "strawberry", "mango", "blueberry"];

  let cardDeck: Array<string> = cardTypes.concat(cardTypes); // this just produces a new array with two of each type
  cardDeck.sort(() => Math.random() - 0.5);

  return (
    <>
      {cardDeck.map((value, index) => {
        return  <Card key={index} id={index} card={value} matched={false}/>
      })}
    </>
  )
}