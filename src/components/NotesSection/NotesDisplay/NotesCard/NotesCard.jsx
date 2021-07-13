import { useState } from "react";
import NotesMenu from "../../NotesMenu/NotesMenu";
import TagsDisplay from "../../TagsDisplay/TagsDisplay";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import NotesEditModal from "../NotesEditModal/NotesEditModal";
import { useNotes } from "../../../../contexts";

const maxTitleChars = 50;
const maxContentChars = 200;

const NotesCard = ({
  noteId,
  tagId,
  title,
  content,
  bgColor,
  tags,
  isPinned,
  inTrash,
}) => {
  const [modalVisible, setModalVisibility] = useState(false);
  const { dispatch } = useNotes();

  const updateDisplayNote = (id, property, value) => {
    dispatch({
      type: "UPDATE_NOTE_PROPERTY",
      payload: { noteId: id, property, updatedValue: value },
    });
  };

  const updateBgColor = (color) => {
    updateDisplayNote(tagId, "bgColor", color);
  };

  const deleteNote = () => {
    updateDisplayNote(tagId, "isTrashed", true);
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
              noteId={noteId}
              updateBgColor={(color) => updateBgColor(color)}
              activeColor={bgColor}
              updateTagsList={(tag) => updateTagsList(tag)}
              showEditIcon={true}
              updateModalVisibility={(newState) =>
                updateModalVisibility(newState)
              }
              deleteNote={() => deleteNote()}
              inTrash={inTrash}
            />
          </div>
        </div>
      </div>
      <NotesEditModal
        modalVisible={modalVisible}
        updateModalVisibility={(newState) => updateModalVisibility(newState)}
        tagId={tagId}
        noteId={noteId}
        title={title}
        content={content}
        bgColor={bgColor}
        tags={tags}
        isPinned={isPinned}
        deleteTag={(tag) => deleteTag(tag)}
        updateBgColor={(color) => updateBgColor(color)}
        updateTagsList={(tag) => updateTagsList(tag)}
      />
    </div>
  );
};

export default NotesCard;
