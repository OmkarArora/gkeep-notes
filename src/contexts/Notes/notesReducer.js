export const notesReducer = (state, action) => {
  let notes = null;
  let updatedNote = null;

  switch (action.type) {
    case "SET_NOTES":
      return { ...state, notes: action.payload.notes };

    case "ADD_NEW_NOTE":
      return { ...state, notes: [...state.notes, action.payload.note] };

    case "ADD_NOTE_TO_TRASH":
      notes = state.notes.map((note) => {
        if (note.id === action.payload.noteId) {
          return {
            ...note,
            isTrashed: true,
            isPinned: false,
            trashedDate: new Date(),
          };
        }
        return note;
      });
      return { ...state, notes };

    case "RESTORE_NOTE":
      notes = state.notes.map((note) => {
        if (note.id === action.payload.noteId) {
          return {
            ...note,
            isTrashed: false,
            trashedDate: null,
          };
        }
        return note;
      });
      return { ...state, notes };

    case "DELETE_NOTE_FOREVER":
      notes = state.notes.filter((note) => note.id !== action.payload.noteId);
      return { ...state, notes };

    case "UPDATE_NOTE_PROPERTY":
      updatedNote = state.notes.find(
        (item) => item.id === action.payload.noteId
      );
      updatedNote = { ...updatedNote };
      updatedNote[`${action.payload.property}`] = action.payload.updatedValue;

      if (action.payload.property === "isTrashed") {
        updatedNote["isPinned"] = false;
      }

      notes = state.notes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        }
        return note;
      });
      return { ...state, notes };

    default:
      return state;
  }
};
