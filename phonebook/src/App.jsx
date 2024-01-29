import { useState, useEffect } from "react";
import "./index.css";
import Person from "./components/Person";
import Search from "./components/Search";
import Form from "./components/Form";
import axios from "axios";
import personService from "./services/personService";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState(null);

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
    const duplicateName = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    // const duplicateNumber = persons.find(
    //   (person) => person.number === newNumber
    // );

    if (duplicateName) {
      // if duplicate name, ask user if they want to replace the number
      if (
        confirm(
          `${newName} is already aded to the phonebook, replace the old number with a new one?`
        )
      ) {
        personService.update(duplicateName.id, nameObject).then((response) => {
          console.log(response);
          const personsCopy = persons.map((person) => {
            if (person.id === duplicateName.id) {
              return nameObject;
            } else {
              return person;
            }
          });
          setPersons(personsCopy);
          setNewName("");
          setNewNumber("");
          // show the confirm notification for few seconds after editing a person
          setMessage(`${newName}'s number was edited'`);
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        });
      } else {
        console.log("cancelled!");
      }
    } else {
      // if the name and number is not a duplicate, add new person to the database and re-set the list
      personService.create(nameObject).then((response) => {
        console.log(response);
        // add new person to the list of persons
        setPersons(persons.concat(nameObject));
        setNewName("");
        setNewNumber("");
        // show the confirm notification for few seconds after adding a new person
        setMessage(`${newName} was added`);
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      });
    }
  };

  // handle delete of person from the list
  const handleDelete = (name, id) => {
    if (confirm(`Delete ${name} ?`) === true) {
      personService.remove(id).then((response) => {
        // filter the deleted person out of the persons list
        const personsCopy = persons.filter((person) => person.id !== id);
        console.log(personsCopy);
        setPersons(personsCopy);
      });
    } else {
      console.log("cancelled!");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
        <Person
          key={person.name}
          person={person}
          handleDelete={() => handleDelete(person.name, person.id)}
        />
      ))}
    </div>
  );
};

export default App;
