import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board/Board";
import Dice from "./components/Dice/Dice";

function App() {
  const [count, setCount] = useState(0);
  const divRef = useRef();

  const startDiceRoll = () => {
    let childrens = divRef.current.children;
    Array.from(childrens).forEach((child) => {
      child.click();
    });
  };

  return (
    <>
      <Board />
      <div ref={divRef} onClick={startDiceRoll} style={{ display: "flex" }}>
        <Dice key={"dice-1"} />
        <Dice key={"dice-2"} />
      </div>
    </>
  );
}

export default App;
