import React from "react";
import Part from "./Part";
import Sum from "./Sum";

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <Sum parts={parts} />
    </ul>
  );
};

export default Content;
