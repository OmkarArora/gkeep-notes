
const NotesCard = ({title, content}) => {

	return(
		<div style={{border: "1px solid blue"}}>
			<div>{title}</div>
			<div>{content}</div>
		</div>
	)
}

export default NotesCard;