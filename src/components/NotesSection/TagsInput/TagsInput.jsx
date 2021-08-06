import { useState } from "react";
import { FaHashtag } from "react-icons/fa";

import "./tagsInput.css";

const TagsInput = ({ updateTagsList }) => {
  const [tagValue, setTag] = useState("");

  const addNewTag = () => {
    updateTagsList(tagValue);
    setTag("");
  };

  return (
    <div className="container-hashtag">
      <FaHashtag className="icon-hashtag" />
      <div className="container-tagInput">
        <input
          className="input-tags"
          value={tagValue}
          onChange={(event) => setTag(event.target.value)}
          placeholder="Enter tag"
          onKeyPress={(event) => {
            if (event.key === "Enter") addNewTag();
          }}
        />
        {/* <button onClick={addNewTag}>Add</button> */}
      </div>
    </div>
  );
};

export default TagsInput;
