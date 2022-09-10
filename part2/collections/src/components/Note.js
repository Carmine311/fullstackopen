import React from "react";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "Make not important" : "Make important";

  return (
    <li className="note">
      <h3>{note.content}</h3> 
      <button onClick={() => toggleImportance(note.id)}>{label}</button>
    </li>
  );
};

export default Note;
