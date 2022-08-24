import React, { useState } from "react";

export default function ParentOne({ children }) {
  const [counter, setCounter] = useState(0);

  console.log(`parent one render`);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>count - {counter}</button>

      {children}
    </div>
  );
}
