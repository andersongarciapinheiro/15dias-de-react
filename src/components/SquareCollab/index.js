import React, { Component } from "react";
import "./styles.css";

class SquareCollab extends Component {

  state = {content: "X"}
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       content: ""
  //     }
  // }
  


  handleClick = () => {
    // const newState = {};
    // if(this.state.content === "X") {
    //   newState.content = "O";
    // } else {
    //   newState.content = "X";
    // }
    this.setState(
      this.state.content === "X" ? 
        {content: "O"} : 
        {content: "X"}
      );
  };

  render() {
    return (
        <button
          onClick={this.handleClick}
          className="square-collab">
            {this.state.content}
          
          </button>
    )
  }
}
// let content = true;

// const handleClick = (e) => {
// if(content) {
//     e.target.innerHTML = "o"
//     content = false;
//   } else {
//     e.target.innerHTML = "x"
//     content = true;
//   }
// }

// const SquareCollab = () => (

//   <button
//       onClick={handleClick}
//       className="square-collab"></button>

// );

export default SquareCollab;