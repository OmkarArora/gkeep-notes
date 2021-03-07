import ColorPalette from "../ColorPalette/ColorPalette";
import TagsInput from "../TagsInput/TagsInput";

import { FiEdit2 } from "react-icons/fi";

import "./notesMenu.css";

const NotesMenu = ({
  updateBgColor,
  bgColor,
  updateTagsList,
  tagsId,
  showEditIcon,
  updateModalVisibility,
  isEditOpen
}) => {
  return (
    <div className="container-notesMenu">
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

      {showEditIcon ? (
        <div className="container-right">
          {isEditOpen?<span onClick={()=>updateModalVisibility(false)}>Close</span>:
          <FiEdit2
            onClick={() => updateModalVisibility(true)}
            className="icon-editNote"
          />
      }
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NotesMenu;
