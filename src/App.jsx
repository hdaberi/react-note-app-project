import { useReducer, useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteHeader from "./components/NoteHeader";
import "./App.css";

function noteReducer(notes, { type, payload }) {
  switch (type) {
    case "ADD-NOTE":
      return [...notes, payload];
    case "DELETE-NOTE":
      return notes.filter((note) => note.id !== payload);
    case "COMPLATE-NOTE":
      return notes.map((note) =>
        note.id === Number(payload)
          ? { ...note, completed: !note.completed }
          : note,
      );
    default:
      throw new Error("unknown Error" + type);
  }
}

function App() {
  //   const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(noteReducer, []);
  const [filterNotes, setFilterNotes] = useState("latest");

  const newNoteHandler = (newNote) => {
    dispatch({ type: "ADD-NOTE", payload: newNote });
  };
  const deleteNoteHandler = (id) => {
    dispatch({ type: "DELETE-NOTE", payload: id });
  };
  const handleComplateNote = (noteId) => {
    dispatch({ type: "COMPLATE-NOTE", payload: noteId });
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
