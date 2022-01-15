import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleNewNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()

    if(persons.find(p => p.name.toLowerCase() === newName.trim().toLowerCase())){
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const newPerson = {
      name: newName.trim(),
      id: persons.length + 1,
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => (
        <Person key={p.name} person={p} />
      ))}
    </div>
  )
}

export default App
