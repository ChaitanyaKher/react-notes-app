import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Header from './components/Header';
import Search from './components/Search';
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([{
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

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

  useEffect(()=>{
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  },[notes])

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText.toLowerCase())
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
  )
}

export default App;
