import React from "react";
import Note from "./Note";
import './note-list.css';

const NoteList = ({ notes, toggleImportance }) => {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} toggleImportance={toggleImportance} />
      ))}
    </ul>
  );
};

export default NoteList;
