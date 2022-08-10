import React from "react";

export default function ChildFive({ children, name, personArr }) {
  const date = new Date();
  console.log(`child five render`);

  return (
    <div>
      {children} {name}- {personArr[0]} - {personArr[1]}
    </div>
  );
}

export const MemoizedChildFive = React.memo(ChildFive);
