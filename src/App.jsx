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
  // update date using useState
  // const [date, setDate] = useState(new Date());

  // updating date without using useState
  const date = new Date();
  date.setDate(date.getDate() + count);

  const nowDate = new Date().toDateString();

  function handleStepAdding() {
    setStep((s) => s + 1);
  }

  function handleStepMinus() {
    setStep((s) => s - 1);
  }

  function handlecountAdding() {
    setCount((c) => c + step);
    // setDate((CurrDate) => {
    //   const newDate = new Date(CurrDate);
    //   newDate.setDate(newDate.getDate() + step);
    //   return newDate;
    // });
  }

  function handlecountMinus() {
    setCount((c) => c - step);
    // setDate((CurrDate) => {
    //   const newDate = new Date(CurrDate);
    //   newDate.setDate(newDate.getDate() - step);
    //   return newDate;
    // });
  }

  let message = nowDate;
  if (date.toDateString() < nowDate) {
    message = `${Math.abs(count)} Days from Today is ${date}`;
  } else if (date.toDateString() > nowDate) {
    message = `${Math.abs(count)} days ago was ${date}`;
  }
  return (
    <div>
      <div>
        <button onClick={handleStepMinus} className="minus">
          -
        </button>
        <span className="stpes"> step : {step}</span>
        <button onClick={handleStepAdding} className="plus">
          +
        </button>
      </div>
      <div>
        <button onClick={handlecountMinus} className="minus">
          -
        </button>
        <span className="stpes"> Count : {count}</span>
        <button onClick={handlecountAdding} className="plus">
          +
        </button>
      </div>
      <div>
        {" "}
        <span>{message}</span>
      </div>
    </div>
  );
}

export default App;
