import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  const getPersonsHook = () => {
    console.log('Getting persons...')
    axios.get("http://localhost:3005/persons")
    .then(response => {
      console.log('Promise fulfilled')
      setPersons(response.data)
    })
  }

  useEffect(getPersonsHook, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleAddPerson = (newPerson) => {
    const newName = newPerson.name.trim()

    if (
      persons.find((p) => p.name.toLowerCase() === newName.toLowerCase())
    ) {
      alert(`${newName} is already added to the phonebook`)
      return false
    }

    setPersons(persons.concat(newPerson))
    return true
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
        addPersonHandler={handleAddPerson}
      />
      <PersonList header="Numbers" persons={personsToDisplay} />
    </div>
  )
}

export default App
