import React, { useEffect, useState } from "react";

export default function UseState() {
  const [counter, setCounter] = useState(0);

  console.log(`usestate render`);

  return (
    <div>
      <h2 id="demo">
        <span>hell</span> hello world
      </h2>
      <button onClick={() => setCounter(counter + 1)}>count - {counter}</button>
      <button onClick={() => setCounter(0)}>count - 0</button>
      <button onClick={() => setCounter(5)}>count - 5</button>
    </div>
  );
}
