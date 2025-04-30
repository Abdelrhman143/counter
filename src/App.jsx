import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepAdding() {
    setStep((s) => step + 1);
  }

  function handleStepMinus() {
    setStep((s) => step - 1);
  }

  return (
    <div>
      <div>
        <button className="minus">-</button>
        <span className="stpes"> step : {step}</span>
        <button className="plus">+</button>
      </div>
      <div>
        <button className="minus">-</button>
        <span className="stpes"> Count : {count}</span>
        <button className="plus">+</button>
      </div>
      <div>Today is Mon Jun 21 2027</div>
    </div>
  );
}

export default App;
