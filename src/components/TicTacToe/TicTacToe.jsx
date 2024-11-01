import { useEffect, useState } from "react";
import Square from "./Square";
import { useNavigate } from "react-router-dom";

const TicTacToe = () => {
  const [value, setValue] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const handleValue = (index) => {
    let copyValue = [...value];
    if (getWinner(copyValue) || copyValue[index]) return;
    copyValue[index] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setValue(copyValue);
  };

  const getWinner = (value) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (value[x] && value[x] === value[y] && value[x] === value[z]) {
        return value[x];
      }
    }

    return null;
  };

  const handleRestart = () => {
    setIsXTurn(true);
    setValue(Array(9).fill(""));
  };

  useEffect(() => {
    if (!getWinner(value) && value.every((item) => item !== "")) {
      setStatus("This is a draw ! Please restart the game.");
    } else if (getWinner(value)) {
      setStatus(`Winner is ${getWinner(value)} ! Please restart the game.`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [value, isXTurn]);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-evenly items-center gap-10 text-white mt-20">
        <h1 className="text-4xl">Tic Tac Toe</h1>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <Square
              value={value}
              index={0}
              handleValue={() => {
                handleValue(0);
              }}
            />
            <Square
              value={value}
              index={1}
              handleValue={() => {
                handleValue(1);
              }}
            />
            <Square
              value={value}
              index={2}
              handleValue={() => {
                handleValue(2);
              }}
            />
          </div>
          <div className="flex justify-center items-center">
            <Square
              value={value}
              index={3}
              handleValue={() => {
                handleValue(3);
              }}
            />
            <Square
              value={value}
              index={4}
              handleValue={() => {
                handleValue(4);
              }}
            />
            <Square
              value={value}
              index={5}
              handleValue={() => {
                handleValue(5);
              }}
            />
          </div>
          <div className="flex justify-center items-center">
            <Square
              value={value}
              index={6}
              handleValue={() => {
                handleValue(6);
              }}
            />
            <Square
              value={value}
              index={7}
              handleValue={() => {
                handleValue(7);
              }}
            />
            <Square
              value={value}
              index={8}
              handleValue={() => {
                handleValue(8);
              }}
            />
          </div>
        </div>
        <h1 className="text-2xl">{status}</h1>
        <div className="flex justify-center items-center">
          <button
            onClick={handleRestart}
            className="p-2 bg-customRed border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
          >
            Restart
          </button>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="p-2 bg-customRed border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
