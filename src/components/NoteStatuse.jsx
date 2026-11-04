import { useNotes } from "../context/NotesContext";


function NoteStatuse() {
  const notes = useNotes();
  // dervied state :
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const unCompletedNotes = notes.filter((note) => !note.completed).length;
  
  return (
    <ul className="note-status">
      <li className="role-badge role-badge--all">
        All Notes: <span>{allNotes}</span>
      </li>
      <li className="role-badge role-badge--completed">
        Completed: <span>{completedNotes}</span>
      </li>
      <li className="role-badge role-badge--uncompleted">
        Uncompleted:
        <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatuse;
