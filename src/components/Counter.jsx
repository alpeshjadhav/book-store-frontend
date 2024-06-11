import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button className="btn btn-outline-success m-1" onClick={increase}>
        increase
      </button>
      <button
        className="btn btn-outline-warning m-1"
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
    </>
  );
}
