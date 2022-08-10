import React, { useState } from "react";
import ChildTwo, { MemoizedChild } from "./ChildTwo";

export default function ParentTwo() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("abdullah");

  console.log(`parent two render`);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>count - {counter}</button>
      <button onClick={() => setName("shafique")}>Change name</button>

      <MemoizedChild name={name} />
    </div>
  );
}
