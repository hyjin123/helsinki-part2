import React from "react";
import DeleteButton from "./DeleteButton";

const Person = ({ person, handleDelete }) => {
  return (
    <div>
      {person.name} {person.number}
      <DeleteButton handleDelete={handleDelete} />
    </div>
  );
};

export default Person;
