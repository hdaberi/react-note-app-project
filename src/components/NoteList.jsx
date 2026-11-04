import { useNotes, useNotesDispatch } from "../context/NotesContext";
import Message from "./Message";
import NoteStatuse from "./NoteStatuse";

function NoteList({ filterNotes }) {
  const notes = useNotes();

  let sortedNotes = [...notes];
  if (filterNotes === "latest") {
    sortedNotes.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
  }
  if (filterNotes === "erliast") {
    sortedNotes.sort((a, b) => new Date(a.createAt) - new Date(b.createAt));
  }
  if (filterNotes === "completed") {
    // تیک‌خورده‌ها بروند پایین، تیک‌نخورده‌ها بالا
    sortedNotes.sort((a, b) => Number(a.completed) - Number(b.completed));
  }

  return (
    <div className="note-container">
      <NoteStatuse />
      <div className="note-list">
        {sortedNotes.length ? (
          sortedNotes.map((note) => <NoteItem key={note.id} note={note} />)
        ) : (
          <Message>
            ℹ️
            <span className="message-text">
              No Notes has already been added.
            </span>{" "}
            <span>🧐</span>
          </Message>
        )}
      </div>
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div className="note-item__content">
          <h2 className="title">{note.title}</h2>
          <p className="desc">{note.desc}</p>
        </div>
        <div className="note-item__tools">
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            onChange={(event) =>
              dispatch({ type: "COMPLATE-NOTE", payload: event.target.id })
            }
          />
          <button
            className="btn btn--danger"
            onClick={() => dispatch({ type: "DELETE-NOTE", payload: note.id })}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
}
