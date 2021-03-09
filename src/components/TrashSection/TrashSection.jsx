import { useState, useEffect } from "react";
import NotesDisplay from "../NotesSection/NotesDisplay/NotesDisplay";

export const TrashSection = () => {
  const [allNotes, setAllNotes] = useState(
    localStorage.getItem("gKeepAllNotes")
      ? JSON.parse(localStorage.getItem("gKeepAllNotes"))
      : []
  );

  const trashedNotes = allNotes.filter((note) => note.isTrashed);

  useEffect(() => {
    localStorage.setItem("gKeepAllNotes", JSON.stringify(allNotes));
  }, [allNotes]);

  const updateDisplayNote = (noteId, property, updatedValue) => {
    let _allNotes = [...allNotes];
    let note = _allNotes.find((item) => item.id === noteId);
    note[`${property}`] = updatedValue;
    if (property === "isTrashed") note["isPinned"] = false;
    setAllNotes(_allNotes);
  };

  const deleteForever = (id) => {
	let _allNotes = allNotes.filter(note => note.id!==id);
	setAllNotes(_allNotes);
  }

  return (
    <div className="section-notes">
      <section
        className="section-display"
        // onClick={() => updateFullContainerVisibility(false)}
      >
        <NotesDisplay
          notes={trashedNotes}
          updateDisplayNote={(id, property, value) =>
            updateDisplayNote(id, property, value)
          }
		  inTrash={true}
		  deleteForever={(id)=>deleteForever(id)}
        />
      </section>
    </div>
  );
};
