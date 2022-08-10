import React, { useState } from "react";
import Child from "./Child";

export default function UseState() {
  const [counter, setCounter] = useState(0);

  console.log(`parent render`);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>count - {counter}</button>
      <button onClick={() => setCounter(0)}>count - 0</button>
      <button onClick={() => setCounter(5)}>count - 5</button>
      <Child />
    </div>
  );
}
