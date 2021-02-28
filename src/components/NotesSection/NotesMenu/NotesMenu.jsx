import ColorPalette from "../ColorPalette/ColorPalette";
import TagsInput from "../TagsInput/TagsInput";

import "./notesMenu.css";

const NotesMenu = ({ updateBgColor, bgColor, updateTagsList, tagsId }) => {
  return (
    <div className="container-notesMenu">
      <ColorPalette
        updateBgColor={(color) => updateBgColor(color)}
        activeColor={bgColor}
      />
      <TagsInput updateTagsList={(tag) => updateTagsList(tag)} tagsId={tagsId}/>
    </div>
  );
};

export default NotesMenu;
