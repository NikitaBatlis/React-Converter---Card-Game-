import React, { useState } from "react";
import Card from "./Card.js";
import GameOver from "./GameOver.js";
import "./Win.scss";


const GameBoard = () => {
  const cards = [
    "Win!",
    "fail",
    "fail",

  ];

  ///////////// HELPER FUNCTION /////////////

  const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  ///////////// SETUP /////////////

  const [cardList, setCardList] = useState(
    shuffle(cards).map((name, index) => {
      return {
        id: index,
        name: name,
        flipped: false,
      };
    })
  );

  const [flippedCards, setFlippedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  ///////////// GAME LOGIC /////////////

  const handleClick = (name, index) => {
    let currentCard = {
      name,
      index
    };

    //update card is flipped
    let updateCards = cardList.map(card => {
      if (card.id === index) {
        card.flipped = true;
      }
      return card;
    });
    let updateFlipped = flippedCards;
    updateFlipped.push(currentCard);
    setFlippedCards(updateFlipped);
    setCardList(updateCards);

    //if 1 cards are flipped, check if it matchs name 'Win!'
    if (flippedCards.length === 1) {
      setTimeout(() => {
        check();
      }, 750);
    }
  };

  const check = () => {
    let updateCards = cardList;
    if (flippedCards.length > 0) {
      isGameOver();
      if (flippedCards[0].name === 'Win!') {
        setIsGameWon(true);
      }
    }
    setCardList(updateCards);
    setFlippedCards([]);
  };

  const isGameOver = () => {
    setGameOver(flippedCards.length > 0);
  };

  ///////////// RESTART - REDO SETUP /////////////

  const restartGame = () => {
    setCardList(
      shuffle(cards).map((name, index) => {
        return {
          id: index,
          name: name,
          flipped: false,
        };
      })
    );

    setFlippedCards([]);
    setGameOver(false);
    setIsGameWon(false);
  };

  ///////////// DISPLAY /////////////

  return (
    <div className="game-board">
      {!gameOver &&
        cardList.map((card, index) => (
          <Card
            key={index}
            id={index}
            name={card.name}
            flipped={card.flipped}
            clicked={flippedCards.length === 1 ? () => {} : handleClick}
          />
        ))}
      {gameOver && <GameOver restartGame={restartGame} isGameWon={isGameWon}/>}
    </div>
  );
};

export default GameBoard;
