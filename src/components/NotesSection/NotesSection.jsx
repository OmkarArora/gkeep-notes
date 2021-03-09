import { useState, useEffect } from "react";
import NotesDisplay from "./NotesDisplay/NotesDisplay";
import NotesInput from "./NotesInput/NotesInput";
import {v4 as uuid} from "uuid";
import "./notesSection.css";

export const NotesSection = () => {
  const [allNotes, setAllNotes] = useState(JSON.parse(localStorage.getItem("gKeepAllNotes")));
  const [fullContainerVisible, setFullContainerVisibility] = useState(false);
  const addNewNote = (newNote) => {
    setAllNotes([
      ...allNotes,
      {
        id: uuid(),
        title: newNote.title,
        content: newNote.content,
        bgColor: newNote.bgColor,
        isPinned: newNote.isPinned,
        tags: newNote.tags,
        isTrashed: false,
        trashedDate: null,
      },
    ]);
  };

  useEffect(() => {
    localStorage.setItem("gKeepAllNotes", JSON.stringify(allNotes))
  }, [allNotes])
 
  
  const updateFullContainerVisibility = (updatedState) =>{
    setFullContainerVisibility(updatedState)
  }

  const updateDisplayNote = (noteId, property, updatedValue) => {
    let _allNotes = [...allNotes];
    let note = _allNotes.find(item => item.id===noteId);
    note[`${property}`] = updatedValue;
    if(property==="isTrashed") note["isPinned"] = false;
    setAllNotes(_allNotes);
  }

  return (
    <div className="section-notes" >
      <section className="section-input" >
        <NotesInput addNewNote={(newNote) => addNewNote(newNote)} 
        updateFullContainerVisibility={(updatedState)=>updateFullContainerVisibility(updatedState)}
        fullContainerVisible={fullContainerVisible}
        />
      </section>
      <section className="section-display" onClick={() => updateFullContainerVisibility(false)}>
        <NotesDisplay notes={allNotes} updateDisplayNote={(id, property, value)=>updateDisplayNote(id, property, value)}/>
      </section>
    </div>
  );
};
