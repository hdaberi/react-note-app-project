import React, { useState } from "react";

function NoteHeader({ notes, filterNotes, setFilterNotes }) {

 
  return (
    <div className="note-header">
      <h1>My Note App ({notes.length})</h1>
      <div className="custom-select">
        <select value={filterNotes} className="note-header__select" onChange={(e)=>setFilterNotes(e.target.value)}>
          <option value="latest">Latest Notes</option>
          <option value="earliest">Earliest Notes</option>
          <option value="completed">Completed Notes</option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
