import NotesCard from "./NotesCard/NotesCard";

const NotesDisplay = ({notes}) => {
	return(
		<div>
			{notes.map(item => <NotesCard title={item.title} content={item.content}/>)}
		</div>
	)
}

export default NotesDisplay;