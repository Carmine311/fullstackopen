import React from "react";
import Person from "./Person";

const PersonList = ({ header, persons, deletePerson }) => {
  return (
    <div>
      <h2>{header}</h2>
      {persons.map((p) => (
        <Person key={p.name} person={p} deletePerson={deletePerson} />
      ))}
    </div>
  );
};

export default PersonList;
