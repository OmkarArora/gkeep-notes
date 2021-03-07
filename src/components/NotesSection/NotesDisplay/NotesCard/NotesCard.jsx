import { useState } from "react";
import NotesMenu from "../../NotesMenu/NotesMenu";
import TagsDisplay from "../../TagsDisplay/TagsDisplay";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import NotesEditModal from "../NotesEditModal/NotesEditModal";

const maxTitleChars = 50;
const maxContentChars = 300;

const NotesCard = ({
  tagId,
  title,
  content,
  bgColor,
  tags,
  isPinned,
  updateDisplayNote,
}) => {
  const [modalVisible, setModalVisibility] = useState(false);

  const updateBgColor = (color) => {
    updateDisplayNote(tagId, "bgColor", color);
  };

  const updateTagsList = (newTag) => {
    let _tags = [...tags, newTag];
    updateDisplayNote(tagId, "tags", _tags);
  };

  const deleteTag = (tag) => {
    let _tags = tags.filter((item) => item !== tag);
    updateDisplayNote(tagId, "tags", _tags);
  };

  const updateModalVisibility = (newState) => {
    setModalVisibility(newState);
  };

  return (
    <div>
      <div
        className="notes-card"
        style={{
          backgroundColor: bgColor === "" ? "" : `var(${bgColor})`,
          borderColor:
            bgColor === "" || bgColor.includes("brown")
              ? `var(--color-light-gray)`
              : `var(${bgColor})`,
          gridRow: content.length > 200 ? "auto / span 2" : "",
        }}
      >
        <div className="container-display-topRow">
          <div className="display-title">
            {title.length > maxTitleChars
              ? `${title.substring(0, maxTitleChars)} . . .`
              : title}
             
          </div>
          <div
            className="container-pin"
            onClick={() => updateDisplayNote(tagId, "isPinned", !isPinned)}
          >
            {isPinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
          </div>
        </div>

        <div className="display-content">
          {content.length > maxContentChars
            ? `${content.substring(0, maxContentChars)} . . .`
            : content}
        </div>
        <div>
          <TagsDisplay
            tags={tags}
            tagsId={tagId}
            deleteTag={(tag) => deleteTag(tag)}
          />

          <div className="container-display-bottomMenu">
            <NotesMenu
              updateBgColor={(color) => updateBgColor(color)}
              activeColor={bgColor}
              updateTagsList={(tag) => updateTagsList(tag)}
              showEditIcon={true}
              updateModalVisibility={(newState) => updateModalVisibility(newState)}
            />
          </div>
        </div>
      </div>
      <NotesEditModal
        modalVisible={modalVisible}
        updateModalVisibility={(newState) => updateModalVisibility(newState)}
        tagId={tagId}
        title={title}
        content={content}
        bgColor={bgColor}
        tags={tags}
        isPinned={isPinned}
        updateDisplayNote={updateDisplayNote}
        deleteTag={(tag) => deleteTag(tag)}
        updateBgColor={(color) => updateBgColor(color)}
        updateTagsList={(tag) => updateTagsList(tag)}
      />
    </div>
  );
};

export default NotesCard;
