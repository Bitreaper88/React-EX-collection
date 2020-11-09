import React from "react";
import Child from "./Child";

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

export default Parent;
