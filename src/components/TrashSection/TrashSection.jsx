import { useNotes } from "../../contexts";
import NotesDisplay from "../NotesSection/NotesDisplay/NotesDisplay";
import { FcEmptyTrash } from "react-icons/fc";
import "./trashSection.css";

export const TrashSection = () => {
  const { notes } = useNotes();

  const trashedNotes = notes.filter((note) => note.isTrashed);

  return (
    <div className="section-notes">
      <section
        className="section-display"
        // onClick={() => updateFullContainerVisibility(false)}
      >
        <NotesDisplay inTrash={true} />
      </section>
      {trashedNotes.length === 0 && (
        <div className="container-trash-placeholder">
          <div className="icon-trash">
            <FcEmptyTrash />
          </div>
          <div className="text-placeholder">Trash is empty</div>
        </div>
      )}
    </div>
  );
};
