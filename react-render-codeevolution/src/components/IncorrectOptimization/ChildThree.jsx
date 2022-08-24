import React from "react";

export default function ChildThree({ children, name }) {
  console.log(`child three render`);

  return (
    <div>
      {children} {name}
    </div>
  );
}

export const MemoizedChild = React.memo(ChildThree);
