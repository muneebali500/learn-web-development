import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action) {
    case `increment`:
      return state + 1;
    case `decrement`:
      return state - 1;
    case `reset`:
      return initialState;
    default:
      return state;
  }
}

export default function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log(`usereducer hook`);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(`increment`)}>increment</button>
      <button onClick={() => dispatch(`decrement`)}>decrement</button>
      <button onClick={() => dispatch(`reset`)}>reset</button>
    </div>
  );
}
