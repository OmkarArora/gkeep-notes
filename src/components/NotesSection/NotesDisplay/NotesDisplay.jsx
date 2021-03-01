import NotesCard from "./NotesCard/NotesCard";

import "./notesDisplay.css";

const NotesDisplay = ({ notes }) => {
  return (
    <div className="container-notes">
      {notes.map((item) => (
        <NotesCard key={`Note${item.id}`} tagId={item.id} title={item.title} content={item.content} bgColor={item.bgColor} tags={item.tags} isPinned={item.isPinned}/>
      ))}
    </div>
  );
};

export default NotesDisplay;
