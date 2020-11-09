import React, { useState, useEffect, useCallback, useContext } from 'react';
import { ExampleContext, StateHolder } from './StateHolder';
import './App.css';

const TestState: React.FC = () => {
  const context = useContext(ExampleContext);
  const changeContext = () => {
    if (context.setText) {
      context.setText("what?");
    }
  }
  return (
    <StateHolder>
      <p>
        <button onClick={changeContext}> Change the context text </button>
      </p>
      <p>
        Context text: {context.text}
      </p>
    </StateHolder>)
}

export default TestState
