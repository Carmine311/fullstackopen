import React, {useState} from 'react'

const PersonForm = (props) => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAddPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim(),
    }

    if(props.addPersonHandler(newPerson)){
      setNewName('')
      setNewNumber('')
    }
  } 

  return (
    <div>
      <h2>{props.header}</h2>
      <form>
        <div>
          <div>
            name: <input value={newName} onChange={handleNewNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNewNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>
            add
          </button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
