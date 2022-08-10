import React from "react";

export default function ChildFour({ children, name }) {
  const date = new Date();
  console.log(`child four render`);

  return (
    <div>
      {children} {name}. We got this on {date.getHours()} : {date.getMinutes()}:{" "}
      {date.getSeconds()}
    </div>
  );
}

export const MemoizedChildFour = React.memo(ChildFour);
