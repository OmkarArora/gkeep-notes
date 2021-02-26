import { useState } from "react";
import ColorPalette from "../ColorPalette/ColorPalette";

const NotesInput = ({addNewNote}) => {
  const [titleState, setTitle] = useState("");
  const [contentState, setContent] = useState("");
  const [bgColor, setBgColor] = useState("");

  const onClickAdd = () => {
	  addNewNote({title: titleState, content: contentState});
	  setTitle("");
	  setContent("");
  }
  const updateBgColor = (color) => {
    setBgColor(color);
  }
  
  console.log(bgColor);
  

  return (
    <div style={{backgroundColor: bgColor===""?"":`var(${bgColor})`}}>
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
      </div>
      <div >
        <ColorPalette updateBgColor={(color)=>updateBgColor(color)} activeColor={bgColor}/>
      <button onClick={onClickAdd}>Add</button>
      </div>
    </div>
  );
};

export default NotesInput;
