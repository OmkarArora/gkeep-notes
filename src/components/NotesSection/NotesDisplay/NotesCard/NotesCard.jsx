
const NotesCard = ({title, content}) => {
	return(
		<div style={content.length>200?{gridRow:"auto / span 2"}:{}} className="card">
			<div>{title}</div>
			<div>{content.length>700?`${content.substring(0,700)} . . .`:content}</div>
		</div>
	)
}

export default NotesCard;