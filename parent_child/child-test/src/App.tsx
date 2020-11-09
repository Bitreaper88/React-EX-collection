import React, { useState } from "react";
import { render } from "react-dom";
//import Parent from "./components/Parent";

const App = () => {
  const [click, setClick] = useState(null);
  const handleClick: any = (name: any) => {
    setClick(name);
  };
  return (
    <div>
      <Parent handleClick={handleClick} />
      {click && <p>{click} is clicked.</p>}
    </div>
  );
};

const Parent: any = ({ handleClick }: any) => (
  <div>
    <Child
      name="First Item"
      handleClick={() => handleClick("First Item is Clicked!")}
    />
    <Child
      name="Second Item"
      handleClick={() => handleClick("Second Item is Clicked!")}
    />
    <Child
      name="Third Item"
      handleClick={() => handleClick("Third Item is Clicked!")}
    />
  </div>
);

const Child = ({ name, handleClick }: any) => <li onClick={handleClick}>{name}</li>;



export default App;
