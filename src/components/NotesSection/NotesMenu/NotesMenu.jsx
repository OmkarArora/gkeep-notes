import ColorPalette from "../ColorPalette/ColorPalette";
import TagsInput from "../TagsInput/TagsInput";

const NotesMenu = ({ updateBgColor, bgColor, updateTagsList, tagsId }) => {
  return (
    <div>
      <ColorPalette
        updateBgColor={(color) => updateBgColor(color)}
        activeColor={bgColor}
      />
      <TagsInput updateTagsList={(tag) => updateTagsList(tag)} tagsId={tagsId}/>
    </div>
  );
};

export default NotesMenu;
