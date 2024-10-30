import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState({ number: 0 });
  const [evilCount, setEvilCount] = useState({ counter: { number: 0 } });

  const increment = () => {
    // setCount(count + 1)

    setCount({ ...count, number: count.number + 1 });
    setCount({ ...count, number: count.number + 1 });
    setCount({ ...count, number: count.number + 1 });
    setCount({ ...count, number: count.number + 1 });
    setCount({ ...count, number: count.number + 1 });
    setCount({ ...count, number: count.number + 1 });
    setCount({ ...count, number: count.number + 1 });
  };

  const evilIncrement = () => {
    // ... SHALLOW COPY, ONE LEVEL DEEP AT A TIME

    for(let i = 0; i < 5; i++){
      const copy = {...evilCount}
      const newCounter = {...copy.counter}
      newCounter.number = copy.counter.number + 1
      copy.counter = newCounter
      setEvilCount(copy)
    }
  }

  console.log("Rendered with the count at: ", count);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>count is {count.number}</button>
        <button onClick={evilIncrement}>evil count is {evilCount.counter.number}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
