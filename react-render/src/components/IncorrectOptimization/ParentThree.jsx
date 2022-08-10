import React, { useState } from "react";
import { MemoizedChildFour } from "./ChildFour";
import ChildThree, { MemoizedChild } from "./ChildThree";

export default function ParentThree() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("abdullah");

  console.log(`parent three render`);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>count - {counter}</button>
      <button onClick={() => setName("shafique")}>Change name</button>

      {/* <MemoizedChild name={name}>
        <strong>hello</strong>
      </MemoizedChild> */}

      <MemoizedChildFour name={name} />
    </div>
  );
}
