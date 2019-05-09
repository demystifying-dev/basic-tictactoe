import React from 'react';
import './App.css';

const App = () => {
  const title = 'Play TicTacToe'
  return (
    <div className="App">
      <h2>{title}</h2>
      <Game />
    </div>
  );
}

const Square = (props) => {
  const alertstring = "You clicked " + props.value
  console.log('as', alertstring)
  return (
    <button className="square" onClick={() => alert(alertstring)}>
      {props.value}
    </button>
  );
}

const Board = () => {
  const renderSquare = (i) => {
    return <Square value={i} />
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

const Game = () => {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
}

export default App;
