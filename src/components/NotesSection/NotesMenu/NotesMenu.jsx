import ColorPalette from "../ColorPalette/ColorPalette";
import TagsInput from "../TagsInput/TagsInput";

import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaTrashAlt, FaTrashRestoreAlt } from "react-icons/fa";

import "./notesMenu.css";

const NotesMenu = ({
  updateBgColor,
  bgColor,
  updateTagsList,
  tagsId,
  showEditIcon,
  updateModalVisibility,
  isEditOpen,
  deleteNote,
  inTrash,
  deleteForever
}) => {
  return (
    <div className="container-notesMenu">
      {inTrash?
      <>
      <div className="container-left">
        <FaTrashAlt
          onClick={() => deleteForever()}
        />
        <FaTrashRestoreAlt
          
        />
      </div>
      </>
      : 
      <>
        <div className="container-left">
        <ColorPalette
          updateBgColor={(color) => updateBgColor(color)}
          activeColor={bgColor}
        />
        <TagsInput
          updateTagsList={(tag) => updateTagsList(tag)}
          tagsId={tagsId}
        />
      </div>
      <div className="container-right">
        <RiDeleteBin6Line className="icon-delete" onClick={()=>deleteNote()}/>
        {showEditIcon ? (
          <>
            {isEditOpen ? (
              <span onClick={() => updateModalVisibility(false)}>Close</span>
            ) : (
              <FiEdit2
                onClick={() => updateModalVisibility(true)}
                className="icon-editNote"
              />
            )}
          </>
        ) : (
          <></>
        )}
      </div>
      </>
      }
      
    </div>
  );
};

export default NotesMenu;
