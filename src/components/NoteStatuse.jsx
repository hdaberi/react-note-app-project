function NoteStatuse({ notes }) {
  return (
   
    <ul className="note-status">
      <li><span>Total Notes: {notes.length}</span></li>
      <li>Completed Notes: {notes.filter((note) => note.completed).length}</li>
      <li>Pending Notes: {notes.filter((note) => !note.completed).length}</li>
    </ul>
  )
}

export default NoteStatuse