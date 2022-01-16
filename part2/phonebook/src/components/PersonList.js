import React from 'react'
import Person from './Person'

const PersonList = (props) => {
  return (
    <div>
      <h2>{props.header}</h2>
      {props.persons.map((p) => (
        <Person key={p.name} person={p} />
      ))}
    </div>
  )
}

export default PersonList
