import { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  // handles change of input
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  // handles input submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
    };

    // find out if the name entered already exists in the phonebook
    const duplicate = persons.find((person) => person.name === newName);
    if (duplicate) {
      alert(`${newName} already exists in the phonebook`);
      setNewName("");
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;