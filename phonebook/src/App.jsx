import { useState, useEffect } from "react";
import Person from "./components/Person";
import Search from "./components/Search";
import Form from "./components/Form";
import axios from "axios";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  // fetch data from the json server
  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  // handles change of name input
  const handleNameChange = (event) => {
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
      // if the name and number is not a duplicate, add new person to the database and re-set the list
      personService.create(nameObject).then((response) => {
        console.log(response);
        // add new person to the list of persons
        setPersons(persons.concat(nameObject));
        setNewName("");
        setNewNumber("");
      });
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
