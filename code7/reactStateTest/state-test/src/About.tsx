import React, { useState } from 'react';
import './App.css';
import ModalHandler from './Modal';
// import {Header} from './index';

const About: React.FC = props => {
  const [listsState, setListState] = useState<number[]>([]);

  const addOneToList = () => {
    const newState = [...listsState, listsState.length + 1]
  }
  return (
    <div>
      <h1>About</h1>

      Haa haa
      <p>
      <ModalHandler backgroundColor={"#CC0000"}/>
      </p>
    </div>
  );
}


export default About;
