import React from "react";
import "./styles.css";

class SquareCollab extends React.Component {

  state = {conteudo: ""}

  targetClick = () => {
    if(this.state.conteudo === "") {
      this.setState({conteudo: this.props.content})
      this.props.onClick()
    }
  }

  render() {
    return (
        <button onClick={this.targetClick} className="square-collab">
          {this.state.conteudo}
        </button>
    )
  }
}

export default SquareCollab;






// class SquareCollab extends Component {

//   state = {content: ""}
//   // constructor(props) {
//   //     super(props);
//   //     this.state = {
//   //       content: ""
//   //     }
//   // }


  // handleClick = () => {
  //   // const newState = {};
  //   // if(this.state.content === "X") {
  //   //   newState.content = "O";
  //   // } else {
  //   //   newState.content = "X";
  //   // }
  //   // ######################################
  //   // this.setState(
  //   //   this.state.content === "X" ? 
  //   //     {content: "O"} : 
  //   //     {content: "X"}
  //   //   );
  //   // ######################################

  // };



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

// export default SquareCollab;


//CAIO HELPS###########

// class SquareCollab extends Component {

//   state = {conteudo: ""}

//   singleClick = () => {
//     if(this.state.conteudo === "") {
//         this.setState({conteudo: this.props.content}) 
//         this.props.onClick()
//     }
//   }

//   render() {
//     return (
//       <button onClick={this.singleClick} className="square-collab">
//             {this.state.conteudo}
//       </button>
//     )
//   }

// }



// export default SquareCollab;