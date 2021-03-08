import NotesCard from "./NotesCard/NotesCard";

import "./notesDisplay.css";

const NotesDisplay = ({ notes, updateDisplayNote }) => {
  const pinnedNotes = notes.filter((note) => note.isPinned);
  const otherNotes = notes.filter((note) => !note.isPinned);
  return pinnedNotes.length === 0 ? (
    <div className="container-notes">
      {notes.map((item) => (
        <NotesCard
          key={`Note${item.id}`}
          tagId={item.id}
          title={item.title}
          content={item.content}
          bgColor={item.bgColor}
          tags={item.tags}
          isPinned={item.isPinned}
          updateDisplayNote={(id, property, value) =>
            updateDisplayNote(id, property, value)
          }
        />
      ))}
    </div>
  ) : (
    <div>
      <div className="section-pinned-notes container-notes">
        {pinnedNotes.map((item) => (
          <NotesCard
            key={`Note${item.id}`}
            tagId={item.id}
            title={item.title}
            content={item.content}
            bgColor={item.bgColor}
            tags={item.tags}
            isPinned={item.isPinned}
            updateDisplayNote={(id, property, value) =>
              updateDisplayNote(id, property, value)
            }
          />
        ))}
      </div>
      <div className="section-other-notes container-notes">
        {otherNotes.map((item) => (
          <NotesCard
            key={`Note${item.id}`}
            tagId={item.id}
            title={item.title}
            content={item.content}
            bgColor={item.bgColor}
            tags={item.tags}
            isPinned={item.isPinned}
            updateDisplayNote={(id, property, value) =>
              updateDisplayNote(id, property, value)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default NotesDisplay;
