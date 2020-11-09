import React from "react";

const Child = ({ name, handleClick }) => <li onClick={handleClick}>{name}</li>;

export default Child;
