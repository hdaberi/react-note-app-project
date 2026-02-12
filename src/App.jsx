import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteHeader from "./components/NoteHeader";
import "./App.css";
function App() {
  const [notes, setNotes] = useState([]);
  const [filterNotes, setFilterNotes] = useState("latest");

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
          : note,
      ),
    );
  };

  let sortedNotes = [...notes];
  if (filterNotes === "latest") {
    sortedNotes.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
  }
  if (filterNotes === "erliast") {
    sortedNotes.sort((a, b) => new Date(a.createAt) - new Date(b.createAt));
  }
  if (filterNotes === "completed") {
    // تیک‌خورده‌ها بروند پایین، تیک‌نخورده‌ها بالا
    sortedNotes.sort((a, b) => Number(b.completed) - Number(a.completed));
  }

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        filterNotes={filterNotes}
        setFilterNotes={setFilterNotes}
      />
      <div className="note-app">
        <AddNewNote onAddNote={newNoteHandler} />
        <NoteList
          notes={sortedNotes}
          deleteNoteHandler={deleteNoteHandler}
          onCompleteNote={handleComplateNote}
        />
      </div>
    </div>
  );
}

export default App;
