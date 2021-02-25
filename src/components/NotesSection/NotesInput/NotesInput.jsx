import { useState } from "react";

const NotesInput = ({addNewNote}) => {
  const [titleState, setTitle] = useState("");
  const [contentState, setContent] = useState("");
  const onClickAdd = () => {
	  addNewNote({title: titleState, content: contentState});
	  setTitle("");
	  setContent("");
  }
  return (
    <div>
      <div>
        <input
          placeholder="Title"
          value={titleState}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
      </div>
      <div>
        <input
          placeholder="Take a note..."
          value={contentState}
          onChange={(event) => setContent(event.target.value)}
        ></input>
        <button onClick={onClickAdd}>Add</button>
      </div>
    </div>
  );
};

export default NotesInput;
