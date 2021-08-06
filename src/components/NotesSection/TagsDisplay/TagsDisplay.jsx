import { TiDelete } from "react-icons/ti";

import "./tagsDisplay.css";

const TagsDisplay = ({ tags, tagsId, deleteTag }) => {
  return (
    <div className="container-tagsDisplay">
      {tags.map((item) => (
        <span key={`${tagsId}:${item}`} className="span-tag">
          {`#${item}`} 
		  <TiDelete className="icon-delete" onClick={()=>deleteTag(item)}/>
        </span>
      ))}
    </div>
  );
};

export default TagsDisplay;
