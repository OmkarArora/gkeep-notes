import TagsDisplay from "../../TagsDisplay/TagsDisplay";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import NotesMenu from "../../NotesMenu/NotesMenu";
import "./notesEditModal.css";
import { useNotes } from "../../../../contexts";

const NotesEditModal = ({
  modalVisible,
  updateModalVisibility,
  tagId,
  title,
  content,
  bgColor,
  tags,
  isPinned,
  deleteTag,
  updateBgColor,
  updateTagsList,
}) => {
  const { dispatch } = useNotes();

  const updateDisplayNote = (id, property, value) => {
    dispatch({
      type: "UPDATE_NOTE_PROPERTY",
      payload: { noteId: id, property, updatedValue: value },
    });
  };
  
  const updateInput = (event, type) => {
    if (event.target.scrollHeight < 400) {
      event.target.style.height = "inherit";
      event.target.style.height = `${event.target.scrollHeight}px`;
      event.target.style.overflow = "hidden";
    } else {
      event.target.style.overflowY = "scroll";
    }
    updateDisplayNote(tagId, type, event.target.value);
  };

  const getRows = (text) => {
    let length = text.length;
    if (length <= 70) return 3;
    if (length <= 140) return 4;
    if (length <= 210) return 6;
    if (length <= 400) return 8;
    return 12;
  };

  return (
    <div
      style={modalVisible ? { display: "flex" } : { display: "none" }}
      className="container-modal"
    >
      <section className="section-modal">
        <div
          className="notes-card"
          style={{
            backgroundColor: bgColor === "" ? "" : `var(${bgColor})`,
            borderColor:
              bgColor === "" || bgColor.includes("brown")
                ? `var(--color-light-gray)`
                : `var(${bgColor})`,
          }}
        >
          <div className="container-display-topRow">
            <textarea
              placeholder="Title"
              value={title}
              rows={getRows(title)}
              className="input-title"
              onChange={(event) => updateInput(event, "title")}
            />
            <div
              className="container-pin"
              onClick={() => updateDisplayNote(tagId, "isPinned", !isPinned)}
            >
              {isPinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
            </div>
          </div>

          <textarea
            rows={getRows(content)}
            placeholder="Take a note..."
            value={content}
            className="input-content"
            onChange={(event) => updateInput(event, "content")}
          />
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
                updateModalVisibility={(newState) =>
                  updateModalVisibility(newState)
                }
                isEditOpen={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotesEditModal;
