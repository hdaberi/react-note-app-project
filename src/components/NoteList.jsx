import NoteStatuse from "./NoteStatuse";
function NoteList({ notes, deleteNoteHandler, onCompleteNote }) {
  console.log(notes);
  return (
    <div className="note-container">
      <NoteStatuse notes={notes} />
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onCompleteNote={onCompleteNote}
            deleteNoteHandler={deleteNoteHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;

function NoteItem({ note, deleteNoteHandler, onCompleteNote }) {
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div className="note-item__content">
          <h2 className="title">{note.title}</h2>
          <p className="desc">{note.desc}</p>
        </div>
        <div className="note-item__tools">
          <button
            className="btn btn--danger"
            onClick={() => deleteNoteHandler(note.id)}
          >
            Delete
          </button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            onChange={(event) => onCompleteNote(event.target.value)}
          />
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
