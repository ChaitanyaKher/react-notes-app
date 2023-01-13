import { useState } from "react";
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";

const App = () => {
  const [notes,setNotes] = useState([{
    id: nanoid(),
    text: "This is my First Note",
    date: "13/01/2022"
  },
  {
    id: nanoid(),
    text: "This is my Second Note",
    date: "14/01/2022"
  },
  {
    id: nanoid(),
    text: "This is my Third Note",
    date: "15/01/2022"
  },
  {
    id: nanoid(),
    text: "This is my Fourth Note",
    date: "16/01/2022"
  },
]);

const addNote = (text) =>{
  const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
}
  return (
    <div className="container">
      <NotesList notes = {notes} handleAddNote={addNote} />
    </div>
  )
}

export default App;
