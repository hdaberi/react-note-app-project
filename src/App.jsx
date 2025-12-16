import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteHeader from "./components/NoteHeader";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const newNoteHandler = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote]);
  };
  const deleteNoteHandler = (id) => {
    setNotes((prevNote) => prevNote.filter((note) => note.id !== id));
  };
  const handleComplateNote = (noteId) => {
    setNotes((prevNote) =>
      prevNote.map((note) =>
        note.id === Number(noteId)
          ? { ...note, completed: !note.completed }
          : note
      )
    );
  };
  return (
    <div className="container">
      <NoteHeader notes={notes} />
      <div className="note-app">
        <AddNewNote onAddNote={newNoteHandler} />
        <NoteList
          notes={notes}
          deleteNoteHandler={deleteNoteHandler}
          onCompleteNote={handleComplateNote}
        />
      </div>
    </div>
  );
}

export default App;
