import { useRef } from "react";
import TagsDisplay from "../../TagsDisplay/TagsDisplay";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import NotesMenu from "../../NotesMenu/NotesMenu";
import "./notesEditModal.css";

const NotesEditModal = ({
  modalVisible,
  updateModalVisibility,
  tagId,
  title,
  content,
  bgColor,
  tags,
  isPinned,
  updateDisplayNote,
  deleteTag,
  updateBgColor,
  updateTagsList,
}) => {
  const contentInputRef = useRef(null);
  const titleInputRef = useRef(null);
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
              value={title}
              ref={titleInputRef}
              rows="1"
              className="input-title"
              placeholder="Title"
            />
            <div
              className="container-pin"
              onClick={() => updateDisplayNote(tagId, "isPinned", !isPinned)}
            >
              {isPinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
            </div>
          </div>

          <textarea
            ref={contentInputRef}
            rows="1"
            placeholder="Take a note..."
            value={content}
            className="input-content"
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
