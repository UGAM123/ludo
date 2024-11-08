import React, { useEffect, useState } from "react";
import "./Dice.css";

const Dice = ({ onRoll }) => {
  const [diceRoll, setDiceRoll] = useState(1);
  const [num, setNum] = useState(1);
  const [diceRolling, setDiceRolling] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const rollingAnimation = () => {
    setNum(Math.floor(Math.random() * 6) + 1);
  };

  const rollDice = () => {
    if (!diceRolling) {
      //   clearTimeout(id);
      const intervalId = setInterval(rollingAnimation, 50);
      setDiceRolling(true);
      setTimeout(() => {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        setDiceRoll(rollResult);
        onRoll(rollResult);
        setDiceRolling(false);
        clearInterval(intervalId);
      }, 500);
    }
  };

  return (
    <div className="dice-container" onClick={rollDice}>
      <button className="dice" disabled={diceRolling}>
        {!diceRolling && (
          <>
            {diceRoll == 1 && (
              <img src="./assets/images/red_dice/dice-number-1.png" />
            )}
            {diceRoll == 2 && (
              <img src="./assets/images/red_dice/dice-number-2.png" />
            )}
            {diceRoll == 3 && (
              <img src="./assets/images/red_dice/dice-number-3.png" />
            )}
            {diceRoll == 4 && (
              <img src="./assets/images/red_dice/dice-number-4.png" />
            )}
            {diceRoll == 5 && (
              <img src="./assets/images/red_dice/dice-number-5.png" />
            )}
            {diceRoll == 6 && (
              <img src="./assets/images/red_dice/dice-number-6.png" />
            )}
          </>
        )}
        {diceRolling && (
          <img src={`assets/images/red_dice/dice-number-${num}.png`} />
        )}
      </button>
    </div>
  );
};

export default Dice;
