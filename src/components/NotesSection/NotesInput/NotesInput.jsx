import { useState } from "react";
import NotesMenu from "../NotesMenu/NotesMenu";
import TagsDisplay from "../TagsDisplay/TagsDisplay";
import { AiOutlinePushpin, AiFillPushpin } from "react-icons/ai";

import "./notesInput.css";

const NotesInput = ({ addNewNote }) => {
  const [titleState, setTitle] = useState("");
  const [contentState, setContent] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [addedTags, addTag] = useState([]);
  const [isPinned, setPin] = useState(false);

  const onClickAdd = () => {
    addNewNote({ title: titleState, content: contentState });
    setTitle("");
    setContent("");
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
      <div className="container-input-topRow">
        <textarea
          rows="1"
          className="input-title"
          placeholder="Title"
          value={titleState}
          onChange={(event) => updateInput(event, "title")}
        ></textarea>
        <div className="container-pin" onClick={()=>setPin(!isPinned)}>
          {isPinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
        </div>
      </div>

      <textarea
        rows="1"
        className="input-content"
        placeholder="Take a note..."
        value={contentState}
        onChange={(event) => updateInput(event, "content")}
      ></textarea>

      <div>
        <TagsDisplay
          tags={addedTags}
          tagsId={"newNote"}
          deleteTag={(tag) => deleteTag(tag)}
        />
      </div>
      <NotesMenu
        updateBgColor={(color) => updateBgColor(color)}
        activeColor={bgColor}
        updateTagsList={(tag) => updateTagsList(tag)}
      />
      <button onClick={onClickAdd}>Add</button>
    </div>
  );
};

export default NotesInput;
