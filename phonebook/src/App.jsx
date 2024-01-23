import { useState } from "react";
import Person from "./components/Person";
import Search from "./components/Search";
import Form from "./components/Form";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  // handles change of name input
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  // handles change of number input
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  // IF no search filtered list is the existing list

  // handles change of search input
  const handleSearchChange = (event) => {
    const searched = event.target.value;
    setNewSearch(searched);
  };

  // filter out list of contact by search and display it using map method
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  );

  console.log(filteredPersons);
  // handles input submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    // find out if the name or number entered already exists in the phonebook
    const duplicateName = persons.find((person) => person.name === newName);
    const duplicateNumber = persons.find(
      (person) => person.number === newNumber
    );

    if (duplicateName || duplicateNumber) {
      alert(`${newName} or ${newNumber} already exists in the phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>

      {filteredPersons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default App;
