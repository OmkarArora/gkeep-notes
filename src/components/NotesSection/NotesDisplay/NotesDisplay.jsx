import { useNotes } from "../../../contexts";
import NotesCard from "./NotesCard/NotesCard";

import "./notesDisplay.css";

const NotesDisplay = ({ inTrash }) => {
  const { notes } = useNotes();
  let mappedNotes = notes;

  if (inTrash) {
    mappedNotes = notes.filter((note) => note.isTrashed);
  }
  const pinnedNotes = mappedNotes.filter(
    (note) => note.isPinned && !note.isTrashed
  );
  const otherNotes = mappedNotes.filter(
    (note) => !note.isPinned && !note.isTrashed
  );

  return pinnedNotes.length === 0 ? (
    <div className="container-notes">
      {inTrash
        ? mappedNotes.map((item) => (
            <NotesCard
              key={`Note${item.id}`}
              noteId={item.id}
              tagId={item.id}
              title={item.title}
              content={item.content}
              bgColor={item.bgColor}
              tags={item.tags}
              isPinned={item.isPinned}
              inTrash={inTrash}
            />
          ))
        : otherNotes.map((item) => (
            <NotesCard
              key={`Note${item.id}`}
              noteId={item.id}
              tagId={item.id}
              title={item.title}
              content={item.content}
              bgColor={item.bgColor}
              tags={item.tags}
              isPinned={item.isPinned}
              inTrash={inTrash}
            />
          ))}
    </div>
  ) : (
    <div>
      <div className="section-pinned-notes container-notes">
        {pinnedNotes.map((item) => (
          <NotesCard
            key={`Note${item.id}`}
            noteId={item.id}
            tagId={item.id}
            title={item.title}
            content={item.content}
            bgColor={item.bgColor}
            tags={item.tags}
            isPinned={item.isPinned}
          />
        ))}
      </div>
      <div className="section-other-notes container-notes">
        {otherNotes.map((item) => (
          <NotesCard
            key={`Note${item.id}`}
            noteId={item.id}
            tagId={item.id}
            title={item.title}
            content={item.content}
            bgColor={item.bgColor}
            tags={item.tags}
            isPinned={item.isPinned}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesDisplay;
