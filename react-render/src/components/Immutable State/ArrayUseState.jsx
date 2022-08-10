import React, { useState } from "react";

export default function ObjectUseState() {
  const [person, setPerson] = useState([`haseeb`, `ali`]);

  function changeName() {
    // person.push("muneeb");
    // person.push("khan");
    // setPerson(person);

    const newPerson = [...person];
    newPerson.push("muneeb");
    newPerson.push("khan");
    setPerson(newPerson);
  }

  console.log(`ArrayUseState render`);

  return (
    <div>
      {person.map((per, index) => (
        <li key={index}>{per}</li>
      ))}
      <button onClick={changeName}>click</button>
    </div>
  );
}
