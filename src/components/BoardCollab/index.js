// import React from "react";
// import "./styles.css";

// const BoardCollab = props => (

//   <article className="board">{props.children}</article>

// );

// export default BoardCollab;


//###########################################


// import React from "react";
// import "./styles.css";

// const BoardCollab = (children) => (

//   <article className="board">{children}</article>

// );

// export default BoardCollab;


import React from "react";
import "./styles.css";
import SquareCollab from "../SquareCollab/index.js";

const squares = [];

const squaresCollab = qtd => {
  for(let i = 0; squares.length < qtd; i++) {
    //key={i} <- cria uma identidade para o component se nao tiver
    //key ele vai entender que sao components iguais e vai dar erro !
    squares.push(<SquareCollab key={i}/>) 
  }
  return squares;
}



const BoardCollab = ({qtd}) => (
  <article className="board">{squaresCollab(qtd)}</article>
);

export default BoardCollab;