import React from "react";
type GreetProps = {
  name?: string;
};

export default function Greet(props: GreetProps) {
  return <h1>Greeting {props.name}</h1>;
}
