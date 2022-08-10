import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export default function ParentFour() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("abdullah");

  const person = {
    name: "haseeb",
    age: 34,
  };

  //   const memoizedPerson = useMemo(() => person, []);

  function handleClick() {}
  const memoizedClick = useCallback(() => handleClick, []);

  const personArr = ["haseeb", "khan"];
  const memoizedPerson = useMemo(() => personArr, []);

  console.log(`parent four render`);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>count - {counter}</button>
      <button onClick={() => setName("shafique")}>Change name</button>
      <MemoizedChildFive name={name} personArr={memoizedPerson} />
    </div>
  );
}
