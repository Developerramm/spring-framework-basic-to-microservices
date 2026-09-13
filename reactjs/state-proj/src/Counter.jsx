import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>count value is {count} </h3>

      <button className="btn btn-outline-primary" onClick={increase}>
        Increase{" "}
      </button>
      <br />
      <br />

      <button onClick={decrease} className="btn btn-outline-success">
        Decrease{" "}
      </button>
      <br />
      <br />

      <button className="btn btn-outline-danger" onClick={reset}>
        Reset{" "}
      </button>
    </div>
  );
};

export default Counter;
