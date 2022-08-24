import React, { useState } from "react";
import ChildOne from "./ChildOne";
import ParentOne from "./ParentOne";

export default function GrandParent() {
  const [count, setCount] = useState(0);

  console.log(`grand parent render`);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        grand count - {count}
      </button>
      <ParentOne>
        <ChildOne />
      </ParentOne>
    </div>
  );
}
