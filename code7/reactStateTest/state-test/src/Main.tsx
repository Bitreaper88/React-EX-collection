import React, { useState } from 'react';
import './App.css';
import ModalHandler from './Modal';


const Main: React.FC = props => {
  const [listsState, setListState] = useState<number[]>([]);

  const addOneToList = () => {
    const newState = [...listsState, listsState.length + 1]
  }

  return (
    <div>
      <h1>Main</h1>
      Hee hee
      <p>
      <ModalHandler backgroundColor={"#99ffcc"}/>
      </p>
    </div>
  );
}


export default Main;
