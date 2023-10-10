import "./Gamboard.css";

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let gameIsFinished = false;
let winnerName = ''
let textContent = ''

let current = 0;
function Gameboard(props) {
  function Game(event) {
    if(gameIsFinished) {
      return
    }
    const selectedRow = event.target.dataset.row - 1;
    const selectedCol = event.target.dataset.col - 1;
    if (gameData[selectedRow][selectedCol] != 0) {
      alert("Please select a empty field");
      return;
    }
    gameData[selectedRow][selectedCol] = props.activePlayer + 1;
    event.target.textContent = props.playerData[props.activePlayer].symbol;
    current++;
    const winnerId = checkForWinner();
    console.log(winnerId)
    winner(winnerId)
    props.switchPlayer();
  }

  function winner(winnerId) {
       if(winnerId === 1) {
          winnerName = props.playerData[0].name
          gameIsFinished = true
          props.winnerGame(winnerName,textContent)
       } else if(winnerId === 2) {
          winnerName = props.playerData[1].name
          gameIsFinished = true
          props.winnerGame(winnerName,textContent)
       } else if(winnerId === -1) {
         textContent = "It's a Draw"
         gameIsFinished = true
         props.winnerGame(winnerName,textContent)
       }
  }

  function checkForWinner() {
    //check for row
    for (let i = 0; i < 3; i++) {
      if (
        gameData[i][0] > 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][0] === gameData[i][2]
      ) {
        return gameData[i][0];
      }

      //check for column

      if (
        gameData[0][i] > 0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] === gameData[2][i]
      ) {
        return gameData[0][i];
      }

      // check for top left corner to bottom right corner
      if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[0][0] === gameData[2][2]
      ) {
        return gameData[0][0];
      }
      //check from bottom left corner to top right corner
      if (
        gameData[2][0] > 0 &&
        gameData[2][0] == gameData[1][1] &&
        gameData[2][0] == gameData[0][2]
      ) {
        return gameData[2][0];
      }
    }
    if (current === 9) {
      return -1;
    }
    return 0
  }
  return (
    <div>
      <ul>
        <li onClick={Game} data-row="1" data-col="1">
          
        </li>
        <li onClick={Game} data-row="1" data-col="2">
          
        </li>
        <li onClick={Game} data-row="1" data-col="3">
          
        </li>

        <li onClick={Game} data-row="2" data-col="1">
          
        </li>
        <li onClick={Game} data-row="2" data-col="2">
          
        </li>
        <li onClick={Game} data-row="2" data-col="3">
          
        </li>

        <li onClick={Game} data-row="3" data-col="1">
          
        </li>
        <li onClick={Game} data-row="3" data-col="2">
          
        </li>
        <li onClick={Game} data-row="3" data-col="3">
          
        </li>
      </ul>
    </div>
  );
}
export default Gameboard;
