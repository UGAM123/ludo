import { useRef, useState } from "react";
import Board from "../Board/Board";
import Dice from "../Dice/Dice";

const Game = () => {
  const divRef = useRef();
  const [dice1Value, setDice1Value] = useState(0);
  const [dice2Value, setDice2Value] = useState(0);

  const handleDice1Roll = (value) => setDice1Value(value);
  const handleDice2Roll = (value) => setDice2Value(value);

  const startDiceRoll = () => {
    let childrens = divRef.current.children;
    Array.from(childrens).forEach((child) => {
      child.click();
    });
  };
  return (
    <>
      <Board key={"board-1"} />
      <div ref={divRef} onClick={startDiceRoll} className="flex justify-center items-center">
        <Dice key={"dice-1"} onRoll={handleDice1Roll} />
        <Dice key={"dice-2"} onRoll={handleDice2Roll} />
        <p>Total: {dice1Value + dice2Value}</p>
      </div>
    </>
  );
};

export default Game;
