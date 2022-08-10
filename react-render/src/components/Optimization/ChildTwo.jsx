import React from "react";

export default function ChildTwo() {
  console.log(`child two render`);

  return <div>Child two</div>;
}

export const MemoizedChild = React.memo(ChildTwo);
