import React from "react";

const GameOver = ({ restartGame, isGameWon }) => {
  return (
    <div className="centered">
      <h1>{isGameWon ? 'You Won!' : 'Fail, please try again.'}</h1>
      <button className="restart-button" onClick={restartGame}>
        Play Again?
      </button>
    </div>
  );
};

export default GameOver;