import { useState, useEffect } from "react";
import NotesDisplay from "./NotesDisplay/NotesDisplay";
import NotesInput from "./NotesInput/NotesInput";
import { useNav } from "../../contexts";
import "./notesSection.css";

export const NotesSection = () => {
  const [fullContainerVisible, setFullContainerVisibility] = useState(false);

  const {setActiveNavLink} = useNav();
  useEffect(() => setActiveNavLink("home"), [setActiveNavLink]);

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
