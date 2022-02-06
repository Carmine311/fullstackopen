import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";
import NoteList from "./components/NoteList";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("...a new note");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3005/notes").then((response) => {
      console.log("Promise fulfilled");
      setNotes(response.data);
    });
  };

  useEffect(hook, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    axios.post("http://localhost:3005/notes", noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const toggleImportance = (id) => {
    const url = `http://localhost:3005/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    axios.put(url, changedNote)
    .then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response.data))
    })
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <NoteList notes={notesToShow} toggleImportance={toggleImportance} />
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
