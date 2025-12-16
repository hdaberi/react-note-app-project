function NoteStatuse({ notes }) {
  return (
    <ul className="note-status">
      <li className="role-badge role-badge--all">
        Total Notes: <span>{notes.length}</span>
      </li>
      <li className="role-badge role-badge--completed">
        Completed Notes:{" "}
        <span>{notes.filter((note) => note.completed).length}</span>
      </li>
      <li className="role-badge role-badge--uncompleted">
        Pending Notes:{" "}
        <span>{notes.filter((note) => !note.completed).length}</span>
      </li>
    </ul>
  );
}

export default NoteStatuse;
