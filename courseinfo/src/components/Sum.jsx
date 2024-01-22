import React from "react";

const Sum = ({ parts }) => {
  const sum = parts.reduce((sum, part) => (sum += part.exercises), 0);
  return <div>total of {sum} exercises</div>;
};

export default Sum;
