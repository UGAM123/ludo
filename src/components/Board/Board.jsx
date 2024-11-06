import React from "react";
import "./Board.css";

const Board = () => {
  const colors = ["green", "yellow", "red", "blue"];

  const createBase = (position, color) => {
    return (
      <>
        <div
          className={`board-${position}-base board-base`}
          style={{ background: color }}
        >
          <div className="base-container">
            {Array(4)
              .fill(0)
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="base-inner-container"
                    style={{ background: color }}
                  >
                    <div className="pin">
                      <p style={{ background: color }}></p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="board">
        <div className="board-home"></div>

        {createBase("tl", colors[0])}
        {createBase("tr", colors[1])}
        {createBase("bl", colors[2])}
        {createBase("br", colors[3])}

        {Array.from({ length: 24 }, (_, index) => {
          // Determine the class based on the index
          const color = colors[Math.floor(index / 6) % colors.length];
          return (
            <div
              key={index}
              className={`item${index + 1}`}
              style={{ background: `${color}` }}
            ></div>
          );
        })}
        {Array.from({ length: 48 }, (_, index) => {
          return <div key={24 + index}></div>;
        })}
      </div>
    </>
  );
};

export default Board;
