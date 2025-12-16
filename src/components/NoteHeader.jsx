import React, { useState } from "react";

function NoteHeader({ notes }) {
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };
  return (
    <div className="note-header">
      <h1>My Note App ({notes.length})</h1>
      <div className="custom-select">
        <select value={selectedFilter} className="note-header__select" onChange={handleFilterChange}>
          <option value="latest">Latest Notes</option>
          <option value="earliest">Earliest Notes</option>
          <option value="completed">Completed Notes</option>
        </select>
      </div>
    </div>
  );
}

export default NoteHeader;
