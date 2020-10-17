import React, { useState, useEffect, useImperativeHandle } from 'react';
import './App.css';
import AllCards,{ ICard } from './CardHandeler';


const cardTypes: Array<string> =["apple", "orange", "banana", "pear", "coconut", "strawberry", "mango", "blueberry"];
const cardTypesX2: Array<string> = cardTypes.concat(cardTypes); // this just produces a new array with two of each type
export let cardDeck: ICard[]

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



