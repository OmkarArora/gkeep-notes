import { useState } from "react";
import NotesMenu from "../NotesMenu/NotesMenu";
import TagsDisplay from "../TagsDisplay/TagsDisplay";

import "./notesInput.css"

const NotesInput = ({ addNewNote }) => {
  const [titleState, setTitle] = useState("");
  const [contentState, setContent] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [addedTags, addTag] = useState([]);

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
    let updatedTags = addedTags.filter(item => tag.toLowerCase()!==item.toLowerCase())
    addTag(updatedTags);
  }

  return (
    <div className="container-notesInput" style={{ backgroundColor: bgColor === "" ? "" : `var(${bgColor})` }}>
      <div>
        <input
          placeholder="Title"
          value={titleState}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
      </div>
      <div>
        <textarea
          placeholder="Take a note..."
          value={contentState}
          onChange={(event) => setContent(event.target.value)}
        ></textarea>
      </div>
      <div>
        <TagsDisplay tags={addedTags} tagsId={"newNote"} deleteTag={(tag)=>deleteTag(tag)}/>
      </div>
      <NotesMenu
        updateBgColor={(color) => updateBgColor(color)}
        activeColor={bgColor}
        updateTagsList={(tag)=>updateTagsList(tag)}
      />
      <button onClick={onClickAdd}>Add</button>
    </div>
  );
};

export default NotesInput;
