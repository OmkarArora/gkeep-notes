import ColorPalette from "../ColorPalette/ColorPalette";
import TagsInput from "../TagsInput/TagsInput";

import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaTrashAlt, FaTrashRestoreAlt } from "react-icons/fa";

import "./notesMenu.css";
import { useNotes } from "../../../contexts";

const NotesMenu = ({
  updateBgColor,
  bgColor,
  updateTagsList,
  tagsId,
  noteId,
  showEditIcon,
  updateModalVisibility,
  isEditOpen,
  inTrash,
  isNewNote,
}) => {
  const {dispatch} = useNotes();

  const deleteForever = () => {
    dispatch({type: "DELETE_NOTE_FOREVER", payload: {noteId}})
  }

  const restoreNote = () => {
    dispatch({type: "RESTORE_NOTE", payload: {noteId}})
  }

  const deleteNote = () => {
    dispatch({type: "ADD_NOTE_TO_TRASH", payload: {noteId}})
  }

  return (
    <div className="container-notesMenu">
      {inTrash ? (
        <>
          <div className="container-left">
            <FaTrashAlt
              className="icon-menu icon-deleteForever"
              onClick={() => deleteForever()}
            />
            <FaTrashRestoreAlt
              className="icon-menu icon-restore"
              onClick={() => restoreNote()}
            />
          </div>
        </>
      ) : (
        <>
          <div className="container-left">
            <ColorPalette
              className="icon-menu"
              updateBgColor={(color) => updateBgColor(color)}
              activeColor={bgColor}
            />
            <TagsInput
              className="icon-menu"
              updateTagsList={(tag) => updateTagsList(tag)}
              tagsId={tagsId}
            />
          </div>
          <div className="container-right">
            {!isNewNote ? (
              <RiDeleteBin6Line
                className="icon-menu icon-delete"
                onClick={() => deleteNote()}
              />
            ) : (
              <></>
            )}

            {showEditIcon ? (
              <>
                {isEditOpen ? (
                  <span onClick={() => updateModalVisibility(false)}>
                    Close
                  </span>
                ) : (
                  <FiEdit2
                    onClick={() => updateModalVisibility(true)}
                    className="icon-menu icon-editNote"
                  />
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NotesMenu;
