// hooks/useNotes.js
import { useContext } from "react";
import { NotesContext, NotesDispatchContext } from "../context/NotesContext";

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

export const useNotesDispatch = () => {
  const context = useContext(NotesDispatchContext);
  if (context === undefined) {
    throw new Error("useNotesDispatch must be used within a NotesProvider");
  }
  return context;
};