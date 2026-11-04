import { useState } from "react";
import { AddNewNote } from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteHeader from "./components/NoteHeader";
import "./App.css";
import { NotesProvider } from "./context/NotesContext";

function App() {
  const [filterNotes, setFilterNotes] = useState("latest");

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader filterNotes={filterNotes} setFilterNotes={setFilterNotes} />
        <div className="note-app">
          <AddNewNote />
          <NoteList filterNotes={filterNotes} />
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
