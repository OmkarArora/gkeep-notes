import NotesCard from "./NotesCard/NotesCard";

import "./notesDisplay.css";

const NotesDisplay = ({ notes, updateDisplayNote }) => {
  return (
    <div className="container-notes">
      {notes.map((item) => (
        <NotesCard key={`Note${item.id}`} tagId={item.id} title={item.title} content={item.content} bgColor={item.bgColor} tags={item.tags} isPinned={item.isPinned} 
        updateDisplayNote=
        {(id,property,value)=>updateDisplayNote(id,property,value)}
        />
      ))}
    </div>
  );
};

export default NotesDisplay;
