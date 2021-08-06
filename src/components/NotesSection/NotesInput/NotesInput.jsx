import { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
import NotesMenu from "../NotesMenu/NotesMenu";
import TagsDisplay from "../TagsDisplay/TagsDisplay";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNotes } from "../../../contexts";
import "./notesInput.css";

const NotesInput = ({
  updateFullContainerVisibility,
  fullContainerVisible,
}) => {
  const [titleState, setTitle] = useState("");
  const [contentState, setContent] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [addedTags, addTag] = useState([]);
  const [isPinned, setPin] = useState(false);

  const contentInputRef = useRef(null);
  const titleInputRef = useRef(null);

  const { dispatch } = useNotes();

  const onClickAdd = () => {
    let note = {
      id: uuid(),
      title: titleState,
      content: contentState,
      bgColor: bgColor,
      isPinned: isPinned,
      tags: addedTags,
      isTrashed: false,
      trashedDate: null,
    }
    
    dispatch({type: "ADD_NEW_NOTE", payload: {note}})

    //reset all fields
    setTitle("");
    setContent("");
    addTag([]);
    setBgColor("");
    setPin(false);
    contentInputRef.current.style.height = "inherit";
    titleInputRef.current.style.height = "inherit";
  };

  const updateBgColor = (color) => {
    setBgColor(color);
  };

  const updateTagsList = (newTag) => {
    let isPresent = addedTags.find(
      (tag) => tag.toLowerCase() === newTag.toLowerCase()
    );
    if (isPresent === undefined) addTag([...addedTags, newTag]);
  };

  const deleteTag = (tag) => {
    let updatedTags = addedTags.filter(
      (item) => tag.toLowerCase() !== item.toLowerCase()
    );
    addTag(updatedTags);
  };

  const updateInput = (event, type) => {
    event.target.style.height = "inherit";
    event.target.style.height = `${event.target.scrollHeight}px`;
    if (type === "title") setTitle(event.target.value);
    else setContent(event.target.value);
  };

  return (
    <div
      className="container-notesInput"
      style={{
        backgroundColor: bgColor === "" ? "" : `var(${bgColor})`,
        borderColor:
          bgColor === "" || bgColor.includes("brown")
            ? `var(--color-light-gray)`
            : `var(${bgColor})`,
      }}
    >
      {fullContainerVisible ? (
        <div className="container-input-topRow">
          <textarea
            ref={titleInputRef}
            rows="1"
            className="input-title"
            placeholder="Title"
            value={titleState}
            onChange={(event) => updateInput(event, "title")}
          ></textarea>
          <div className="container-pin" onClick={() => setPin(!isPinned)}>
            {isPinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
          </div>
        </div>
      ) : (
        <></>
      )}

      <textarea
        ref={contentInputRef}
        rows="1"
        className="input-content"
        placeholder="Take a note..."
        value={contentState}
        onChange={(event) => updateInput(event, "content")}
        onFocus={() => updateFullContainerVisibility(true)}
        style={!fullContainerVisible ? { margin: "0" } : {}}
      ></textarea>

      {fullContainerVisible ? (
        <>
          <div>
            <TagsDisplay
              tags={addedTags}
              tagsId={"newNote"}
              deleteTag={(tag) => deleteTag(tag)}
            />
          </div>
          <div className="container-bottomMenu">
            <NotesMenu
              updateBgColor={(color) => updateBgColor(color)}
              activeColor={bgColor}
              updateTagsList={(tag) => updateTagsList(tag)}
              isNewNote={true}
            />
            <IoAddCircleOutline onClick={onClickAdd} className="icon-add" />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NotesInput;
