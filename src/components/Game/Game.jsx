import { useRef, useState } from "react";
import Board from "../Board/Board";
import Dice from "../Dice/Dice"

const Game = () => {
  const divRef = useRef();

  const startDiceRoll = () => {
    let childrens = divRef.current.children;
    Array.from(childrens).forEach((child) => {
      child.click();
    });
  };
  return (
    <>
      <Board key={"board-1"}/>
      <div ref={divRef} onClick={startDiceRoll} className="flex justify-center">
        <Dice key={"dice-1"} />
        <Dice key={"dice-2"} />
      </div>
    </>
  );
};

export default Game;
