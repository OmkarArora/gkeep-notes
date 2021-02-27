import "./tagsDisplay.css";

const TagsDisplay = ({tags, tagsId}) => {
	return (
		<div className="container-tags">
        {tags.map((item) => (
          <span key={`${tagsId}:${item}`} className="span-tag">{`#${item}`}</span>
        ))}
      </div>
	)
}

export default TagsDisplay;