function AddNewNote() {
  return (
    <div className="add-new-note">
      <h2 className="add-new-note-title">New Note Form</h2>
      <form className="note-form">
        <input type="text" placeholder="Note Title" className="text-field" />
        <input
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
