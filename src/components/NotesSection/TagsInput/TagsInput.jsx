import { useState } from "react";
import { FaHashtag } from "react-icons/fa";

import "./tagsInput.css";

const TagsInput = ({updateTagsList}) => {
  const [tagValue, setTag] = useState("");

  const addNewTag = () => {
    updateTagsList(tagValue);
    setTag("");
  }

  return (
    <div className="container-hashtag">
      <FaHashtag className="icon-hashtag" />
      <div className="container-tagInput">
        <input
          className="input-tags"
          value={tagValue}
          onChange={(event) => setTag(event.target.value)}
          placeholder="enter tag"
        />
        <button onClick={addNewTag}>Add</button>
      </div>
    </div>
  );
};

export default TagsInput;
