import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2>Counter Application</h2>
      <h1>{count}</h1>

      <div>
        <button className="btn btn-inc" onClick={increment} style={{backgroundColor:"green"}}>
          Increment

        </button>

        <button className="btn btn-dec" onClick={decrement} style={{backgroundColor:"red"}}>
          Decrement
        </button>

        <button className="btn btn-reset" onClick={reset} style={{backgroundColor:"gray"}}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
