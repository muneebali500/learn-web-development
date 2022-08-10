import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export function ChildA() {
  console.log(`Child A Re-render`);
  return (
    <div>
      <h2>Child A</h2>
      <ChildB />
    </div>
  );
}

export const MemoizedChildA = React.memo(ChildA);

export function ChildB() {
  console.log(`Child B Re-render`);
  return (
    <div>
      <h2>Child B</h2>
      <ChildC />
    </div>
  );
}

export function ChildC() {
  const count = useContext(CountContext);

  console.log(`Child C Re-render`);
  return (
    <div>
      <h2>Child C - {count}</h2>
    </div>
  );
}
