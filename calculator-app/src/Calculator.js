import React, { useState } from "react";
import { evaluate } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");

  const click = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>

      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((b) => (
          <button
            key={b}
            className={
              b === "="
                ? "btn equal"
                : "+-*/".includes(b)
                ? "btn operator"
                : "btn"
            }
            onClick={() => (b === "=" ? calculate() : click(b))}
          >
            {b}
          </button>
        ))}

        <button className="btn clear" onClick={clear}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
