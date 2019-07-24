import React from "react";
import "./styles.css";

let content = true;

const handleClick = (e) => {
if(content) {
    e.target.innerHTML = "o"
    content = false;
  } else {
    e.target.innerHTML = "x"
    content = true;
  }
}

const SquareCollab = () => (

  <button
      onClick={handleClick}
      className="square-collab"></button>

);

export default SquareCollab;