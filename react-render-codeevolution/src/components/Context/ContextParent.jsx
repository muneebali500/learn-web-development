import React, { useState } from "react";
import { ChildA, MemoizedChildA } from "./ContextChildren";

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

export default function ContextParent({ children }) {
  const [count, setCounter] = useState(0);

  console.log(`contextParent render`);

  return (
    <>
      <button onClick={() => setCounter((c) => c + 1)}> click - {count}</button>

      <CountProvider value={count}>{children}</CountProvider>
    </>
  );
}
