import React, { useState } from "react";

const initialState = {
  fname: `haseeb`,
  lname: `ali`,
};

export default function ObjectUseState() {
  const [person, setPerson] = useState(initialState);

  function changeName() {
    // person.fname = `muneeb`;
    // person.lname = `khan`;
    // setPerson(person);

    const newPerson = { ...person };
    newPerson.fname = `muneeb`;
    newPerson.lname = `khan`;
    setPerson(newPerson);
  }

  console.log(person);

  console.log(`objectUseState render`);

  return (
    <div>
      <h2>{person.fname}</h2>
      <h2>{person.lname}</h2>
      <button onClick={changeName}>click</button>
    </div>
  );
}
