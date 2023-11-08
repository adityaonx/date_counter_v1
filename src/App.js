import { useState } from "react";

function App() {
  let vals;
  let today = new Date();
  let newDate = new Date(today);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(today);
  function calcDate() {
    setDate((d) => {
      console.log(d);
      newDate = new Date(d);
      newDate.setDate(newDate.getDate() - step);
      return newDate;
    });
  }
  function stepPrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function stepForward() {
    setStep((s) => s + 1);
  }
  function countPrevious() {
    if (count > 0) {
      setCount((c) => {
        vals = c - step;
        return vals;
      });
      calcDate();
    }
  }
  function countForward() {
    setCount((c) => {
      vals = c + step;
      newDate = new Date(today);
      newDate.setDate(newDate.getDate() + vals);
      setDate((d) => newDate);
      return vals;
    });
  }
  return (
    <div>
      <div className="step">
        <button onClick={stepPrevious}>-</button>
        Step: {step}
        <button onClick={stepForward}>+</button>
      </div>
      <div className="count">
        <button onClick={countPrevious}>-</button>Count: {count}
        <button onClick={countForward}>+</button>
      </div>
      <div className="summary">
        <h4>
          {count} days from today is {date.toDateString()}
        </h4>
      </div>
    </div>
  );
}

export default App;
