import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "./notesReducer";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [{ notes }, dispatch] = useReducer(notesReducer, { notes: [] });

  const value = { notes, dispatch };

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
