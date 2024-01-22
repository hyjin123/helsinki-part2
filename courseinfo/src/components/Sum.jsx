import React from "react";

const Sum = ({ parts }) => {
  const sum = parts.reduce((sum, part) => (sum += part.exercises), 0);
  return <h3>total of {sum} exercises</h3>;
};

export default Sum;
