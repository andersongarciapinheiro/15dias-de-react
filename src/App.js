// componente com estado 

// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <h1>Olá Mundo</h1>
//     );
//   }
// }

// export default App;

//###############################################


// componente Sem estado 
// import React from "react";
// import BoardCollab from "./components/BoardCollab/index.js"
// import SquareCollab from "./components/SquareCollab/index.js";


// const App = () => 
//                  //fragment -> permite colocar mais de um componente 
//                  //para inserir no index.html
//                   <>
//                     <BoardCollab /> 
//                   </>
                
// export default App;



//###############################################



// componente Sem estado 
import React from "react";
import GameWrapper from "./components/GameWrapper/index.js"
import BoardCollab from "./components/BoardCollab/index.js"
import NextPlayer from "./components/NextPlayer/index.js"

const App = () => 
    <GameWrapper>
      <NextPlayer />
      <BoardCollab qtd="9" />
    </GameWrapper> 
                
export default App;
