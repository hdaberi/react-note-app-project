import { useState } from "react";
function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  const addNewNoteHandler = (e) => {
    e.preventDefault();
    if (title && description) {
      const newNote = [
        {
          title: title,
          desc: description,
          id: Date.now(),
          completed: false,
          createAt: new Date().toISOString(),
        },
      ];
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setTitle("");
      setDescription("");
      
    } else {
      alert("Please fill in the title and description");
    }
  };
  return (
    <div className="add-new-note">
      <h2 className="add-new-note-title">New Note Form</h2>
      <form className="note-form" onSubmit={addNewNoteHandler}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Note Title"
          className="text-field"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Note Description"
          className="text-field"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
