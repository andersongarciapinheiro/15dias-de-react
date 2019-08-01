import React, { Component } from "react"

import NextPlayer from "../NextPlayer";
import BoardCollab from "../BoardCollab";
import HistoryCollab from "../HistoryCollab";

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

    const {player} = this.state;

    return (
           <main className="gameWrapper">
             <NextPlayer player={player} />
             <BoardCollab onClick={this.handleClick} 
                          player={this.state.player} />
              <HistoryCollab />
           </main>
    )
  }
}

export default GameWrapper;