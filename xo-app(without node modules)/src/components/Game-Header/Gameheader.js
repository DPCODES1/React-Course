import styled from "styled-components";

import Gameboard from "../Game-board/Gameboard";
import { useState } from "react";

const Gameheader = (props) => {
  const [activePlayer, setActivePlayer] = useState(0);
  const [displayForGame, setDispayForGame] = useState("none");
  const [displayWinner,setDisplayWinner] = useState('none')
  const [winner,setWinner] = useState('')
  const [turnDisplay,setTurnDisplay] = useState('block')

  const startGame = () => {
    if (props.data[0].name.length > 0 && props.data[1].name.length > 0) {
      setDispayForGame("block");
    } else {
      alert("Please set a Custom Name");
    }
  };

  function winnerName(name,text) {
    if(name.length !== 0) {
      setTurnDisplay('none')
      setWinner(name)
      setDisplayWinner('block')
    }

    if(text.length !== 0) {
      setTurnDisplay('none')
      setDisplayWinner('block')
    }
        
  }

  const switchPlayer = () => {
    if(activePlayer == 0) {
     setActivePlayer(1)
    } else {
     setActivePlayer(0)
    }
}
  return (
    <div style={{ textAlign: "center", margin: "30px 0" }}>
      <button onClick={startGame}>Start Game</button>
      <div style={{ display: displayForGame }}>
        <div
          style={{
            width: "80%",
            textAlign: "center",
            backgroundColor: "blueviolet",
            margin: " 20px auto",
            display: displayWinner,
          }}
        >
          <h1 style={{ color: "white" }}>
           {winner.length != 0 ? "You won " + winner : "It's a Draw"}
          </h1>
        </div>
        <div>
          <p style={{display:turnDisplay,color:'white'}}>
            It's Your Turn,
            <span style={{ color: "blueviolet" }}>{props.data[activePlayer].name}</span>
          </p>
        </div>
        <Gameboard winnerGame={winnerName} switchPlayer={switchPlayer} playerData = {props.data} activePlayer={activePlayer}></Gameboard>
      </div>
    </div>
  );
};

export default Gameheader;
