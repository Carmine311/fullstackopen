import React from 'react'

const PersonForm = (props) => {
  return (
    <div>
      <h2>{props.header}</h2>
      <form>
        <div>
          <div>
            name: <input value={props.newName} onChange={props.newNameHandler} />
          </div>
          <div>
            number: <input value={props.newNumber} onChange={props.newNumberHandler} />
          </div>
        </div>
        <div>
          <button type="submit" onClick={props.addPersonHandler}>
            add
          </button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
