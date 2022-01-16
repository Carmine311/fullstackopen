import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()

    if (
      persons.find((p) => p.name.toLowerCase() === newName.trim().toLowerCase())
    ) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim(),
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const personsToDisplay =
    filter.length > 0
      ? persons.filter((p) =>
          p.name.toLowerCase().includes(filter.trim().toLowerCase()),
        )
      : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input value={filter} onChange={handleFilterChange} />
      </div>
      <PersonForm
        header="Add a Person"
        newName={newName}
        newNumber={newNumber}
        newNameHandler={handleNewNameChange}
        newNumberHandler={handleNewNumberChange}
        addPersonHandler={handleAddPerson}
      />
      <PersonList header="Numbers" persons={personsToDisplay} />
    </div>
  )
}

export default App
