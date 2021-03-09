import NotesCard from "./NotesCard/NotesCard";

import "./notesDisplay.css";

const NotesDisplay = ({
  notes,
  updateDisplayNote,
  inTrash,
  deleteForever,
  restoreNote,
}) => {
  const pinnedNotes = notes.filter((note) => note.isPinned && !note.isTrashed);
  const otherNotes = notes.filter((note) => !note.isPinned && !note.isTrashed);

  return pinnedNotes.length === 0 ? (
    <div className="container-notes">
      {inTrash
        ? notes.map((item) => (
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
              inTrash={inTrash}
              deleteForever={(id) => deleteForever(id)}
              restoreNote={(id) => restoreNote(id)}
            />
          ))
        : otherNotes.map((item) => (
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
              inTrash={inTrash}
              deleteForever={(id) => deleteForever(id)}
              restoreNote={(id) => restoreNote(id)}
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
