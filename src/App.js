import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [yourOption, setYourOption] = useState("even");
  const [result, setResult] = useState("Click Generate for result");
  const [countWin, setCountWin] = useState(0);
  const [countLose, setCountLose] = useState(0);

  const handleGenerate = (option) => {
    let num = parseInt(Math.random() * 10);
    setNumber(num);
    if (num === 0) {
      setResult("You get 0");
      return;
    }
    if (option === "even") {
      if (num % 2 === 0) {
        setResult("Win");
        setCountWin(countWin + 1);
      } else {
        setResult("Lose");
        setCountLose(countLose + 1);
      }
    }
    if (option === "odd") {
      if (num % 2 !== 0) {
        setResult("Win");
        setCountWin(countWin + 1);
      } else {
        setResult("Lose");
        setCountLose(countLose + 1);
      }
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>This is app</h1>
      <h2>Your result: {result}</h2>
      <div>
        <span>Win:{countWin}</span> <span>Lose: {countLose}</span>
      </div>
      <h3>Number: {number}</h3>
      <h4>Your option: {yourOption}</h4>
      <select onChange={(e) => setYourOption(e.target.value)}>
        <option value="even">Even</option>
        <option value="odd">Odd</option>
      </select>
      <br />
      <button
        onClick={() => {
          handleGenerate(yourOption);
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default App;
