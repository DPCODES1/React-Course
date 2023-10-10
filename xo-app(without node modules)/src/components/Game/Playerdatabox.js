import "./Playerdatabox.css";

import Gameheader from "../Game-Header/Gameheader";
import React, { useEffect, useRef, useState } from "react";

let playerData = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

function Playerdatabox(props) {
  const inputOpener = (event) => {
    props.formOpener(event);
  };

  console.log(props.data)

  let name2 = useRef();
  let name1 = useRef();

  useEffect(() => {
    const elementid = name2.current.id;
    if (elementid === `player-${props.data.selectedbox}-data`) {
      name2.current.textContent = props.data.name;
      playerData[1].name = props.data.name;
    }
  });

  useEffect(() => {
    const elementid = name1.current.id;
    if (elementid === `player-${props.data.selectedbox}-data`) {
      name1.current.textContent = props.data.name;
      playerData[0].name = props.data.name;
    }
  });

  return (
    <div>
    <div id="container">
      <div>
        <h2 ref={name1} id="player-1-data">
          Player 1
        </h2>
        <p>X</p>
        <button onClick={inputOpener} data-playerid="1">
          Edit
        </button>
      </div>
      <div>
        <h2 ref={name2} id="player-2-data">
          Player 2
        </h2>
        <p>O</p>
        <button onClick={inputOpener} data-playerid="2">
          Edit
        </button>
      </div>
    </div>
    <div>
      <Gameheader data={playerData}></Gameheader>
    </div>
    </div>
  );
}

export default Playerdatabox;
