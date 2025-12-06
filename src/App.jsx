import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const newNoteHandler = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote]);
  };
  const deleteNoteHandler = (id) => {
    setNotes((prevNote) => prevNote.filter((n) => n.id !== id));
  };
  return (
    <div className="container">
      <div className="note-header">
        <h1>NoteApp</h1>
      </div>
      <div className="note-app">
        <AddNewNote onAddNote={newNoteHandler} />
        <NoteList notes={notes} deleteNoteHandler={deleteNoteHandler} />
      </div>
    </div>
  );
}

export default App;
