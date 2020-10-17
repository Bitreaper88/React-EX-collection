import React, { useState, useEffect, useImperativeHandle } from 'react';
import './App.css';

interface ICard{
  id: number;
  card: string;
  matched: boolean;
  visible: boolean;
}

const cardTypes: Array<string> =["apple", "orange", "banana", "pear", "coconut", "strawberry", "mango", "blueberry"];
const cardTypesX2: Array<string> = cardTypes.concat(cardTypes); // this just produces a new array with two of each type
let cardDeck: ICard[]

function App() {
  
  let tempDeck = cardTypesX2.map((value, index) => {
    let newCard: ICard = { id: index, card: value, matched: false, visible: false };
    return newCard
  })
  tempDeck.sort(() => Math.random() - 0.5);
  cardDeck = tempDeck;
  return (
      <AllCards/>
  )

}
export default App;

let paircount: number = 0;
let selectedCard1: ICard | null = null
let selectedCard2: ICard | null = null

const Card: React.FC<ICard> = props => {
  let {id, card, matched, visible} = props;
// let [selectedCards, setSelectedCards] = useState(() => selectedCardsArray);
//let [matchedCard, setMatchedCard] = useState(() => matchedCardsArray);

  function flip() {
    if (!matched) {
      if (selectedCard1) {
        console.log("The first card " + selectedCard1.card);
        console.log("Selected the second card card " + card);
        console.log(selectedCard1.card);
        console.log(card)
        visible = true;
        cardDeck[id].visible = visible;
        selectedCard2 = { id, card, matched, visible }
      } 
      
      if (selectedCard1 === null){
        selectedCard2 = null;
        visible = true;
        cardDeck[id].visible = visible;
        selectedCard1 = { id, card, matched, visible }
        console.log("Selected the first card " + selectedCard1.card);
      }

    } else visible = true;

    if (!selectedCard1 || !selectedCard2) return;
    if (selectedCard1.card === selectedCard2.card) {
      let id1 = selectedCard1.id;
      let id2 = selectedCard2.id;
      cardDeck[id1].matched = true;
      cardDeck[id2].matched = true;
      selectedCard1 = null;
      selectedCard2 = null;
      paircount++;
    }
  }

  return (
    <div className={"grid-item"} onClick={flip}>
      {(() => {
        if (visible) {
         return (<div className="showing">{card}</div>);
        }else return (<div className="noShowing"> </div>);
      })()}
    </div>
  );
}


const AllCards: React.FC = () => {

  let [displayCards, setDisplayCards] =  useState(
    cardDeck.map((value, index) => {
    return  <Card key={index} id={index} card={value.card} matched={value.matched} visible={value.visible}/>
  }));

  function ReDraw () {
    console.log("redraw");
    setDisplayCards(
      cardDeck.map((value, index) => {
      return  <Card key={index} id={index} card={value.card} matched={value.matched} visible={value.visible}/>
    }));
  }

  useEffect(() =>{
    console.log("effect " + selectedCard1?.card);
    console.log("effect " + selectedCard2?.card);
    if(selectedCard1 && selectedCard2){
      let id1 = selectedCard1.id;
      let id2 = selectedCard2.id;
      setTimeout(()=>{
        selectedCard1 = null;
        selectedCard2 = null;
        cardDeck[id1].visible = false;
        cardDeck[id2].visible = false;
        ReDraw()
       
      
       }, 2000)
    }
    console.log("paircount " + paircount);
    if (paircount === 8){
      alert("You Win!!!");
    }
  });


  return (
    <>
      <div className="grid-container"onClick={ReDraw} >
        {displayCards}
      </div>
    </>
  )
}


