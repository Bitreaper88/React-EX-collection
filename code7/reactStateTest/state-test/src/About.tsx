import React, { useState } from 'react';
import './App.css';
import ModalHandler from './Modal';

// import {Header} from './index';

const About: React.FC = props => {
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
