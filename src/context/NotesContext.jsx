// context/NotesContext.jsx
import { createContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

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
      throw new Error("unknown Error: " + type);
  }
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, []);
  
  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

// اگر خواستید این‌ها درون همین فایل بمانند، باید به صورت internal استفاده شوند
// اما برای دسترسی راحت‌تر، آن‌ها را به فایل هوک‌ها منتقل می‌کنیم:
export { NotesContext, NotesDispatchContext };