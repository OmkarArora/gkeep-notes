import { useState, useEffect } from "react";
import NotesDisplay from "./NotesDisplay/NotesDisplay";
import NotesInput from "./NotesInput/NotesInput";
import { useNotes } from "../../contexts";
import "./notesSection.css";

export const NotesSection = () => {
  const { notes } = useNotes();
  const [fullContainerVisible, setFullContainerVisibility] = useState(false);

  useEffect(() => {
    localStorage.setItem("gKeepAllNotes", JSON.stringify(notes));
  }, [notes]);

  const updateFullContainerVisibility = (updatedState) => {
    setFullContainerVisibility(updatedState);
  };

  return (
    <div className="section-notes">
      <section className="section-input">
        <NotesInput fullContainerVisible={fullContainerVisible} updateFullContainerVisibility={updateFullContainerVisibility}/>
      </section>
      <section
        className="section-display"
        onClick={() => updateFullContainerVisibility(false)}
      >
        <NotesDisplay />
      </section>
    </div>
  );
};
