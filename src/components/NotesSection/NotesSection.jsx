import {useState} from "react";
import NotesDisplay from "./NotesDisplay/NotesDisplay";
import NotesInput from "./NotesInput/NotesInput";

const notes = [
  {
    id: 1,
	title: "title 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.",
    bgColor: "yellow",
    isPinned: false,
  },
  {
	id: 2,
    title: "title 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tempore.",
    bgColor: "red",
    isPinned: true,
  },
];

export const NotesSection = () => {
	const [allNotes, setAllNotes] = useState(notes);
	const addNewNote = (newNote) => {
		setAllNotes([...allNotes, {
			id: allNotes.length+1,
			title: newNote.title,
			content: newNote.content,
			bgColor: "gray",
			isPinned: false,
		}])
	}
  return (
    <div>
      <NotesInput addNewNote={(newNote)=>addNewNote(newNote)}/>
      <NotesDisplay notes={allNotes}/>
    </div>
  );
};

