import React, { useState, useContext } from 'react';
import './App.css';
import ModalHandler from './Modal';
import {LangContext} from './Localization';


const Main: React.FC = props => {

  const lang = useContext(LangContext);
 
  return (
    <div>
      <h1>Main</h1>

      {lang.paragraf} Hee hee
      <p>
      <ModalHandler backgroundColor={"#99ffcc"}/>
      </p>
    </div>
  );
}


export default Main;
