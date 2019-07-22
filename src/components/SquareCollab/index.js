import React from "react";
import "./styles.css";


const handleClick = () => console.log('foi')

const SquareCollab = () => (

  <button
      onClick={handleClick}
      className="square-collab" >x</button>

);

export default SquareCollab;