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
              inTrash={inTrash}
              {...item}
            />
          ))
        : otherNotes.map((item) => (
            <NotesCard
              key={`Note${item.id}`}
              {...item}
            />
          ))}
    </div>
  ) : (
    <div>
      <div className="section-pinned-notes container-notes">
        {pinnedNotes.map((item) => (
          <NotesCard
            key={`Note${item.id}`}
            {...item}
          />
        ))}
      </div>
      <div className="section-other-notes container-notes">
        {otherNotes.map((item) => (
          <NotesCard
            key={`Note${item.id}`}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesDisplay;
