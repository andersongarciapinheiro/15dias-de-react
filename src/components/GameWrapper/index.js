import React, { Component } from "react"

import NextPlayer from "../NextPlayer";
import BoardCollab from "../BoardCollab";

import "./styles.css"

// const GameWrapper = ({children}) => (
//   <main className="gameWrapper">{children}</main>
// );

class GameWrapper extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {nextPlayer: "X"}
  // }
  state = {player: "X"}


  handleClick = () => {
    this.setState({player: this.state.player === "X" ? "O" : "X" })
  }


  render() {
    return (
           <main className="gameWrapper">
             <NextPlayer player={this.state.player} />
             
             <BoardCollab onClick={this.handleClick} 
                          content={this.state.player} 
              />
           </main>
    )
  }
}

export default GameWrapper;