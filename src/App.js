import './App.css';
import React from 'react';
import {nanoid} from "nanoid"
import NoteList from './component/NoteList';
import Header from './component/Header';
import Search from "./component/Search"
export default function App() {
  let [notes, setnotes] = React.useState([])
  let [searchText, setSearchText] = React.useState('')
  let addNote = (text) => {
    let FullDate = new Date;
    let newNote = {
      id: nanoid(),
      note: text,
      Date:FullDate.getFullYear()+"-"+FullDate.getMonth()+"-"+FullDate.getDay()
    }
    let newNotes = [...notes, newNote]
    setnotes(newNotes)
  }
  function deletNote(id) {
    let newNotes = notes.filter((note) => note.id !== id)
    setnotes(newNotes)
  }
  console.log(searchText)
  React.useEffect(() => {
    let savedData = JSON.parse(localStorage.getItem("notes-Data"))
    if (savedData) {
      setnotes(savedData)
    }
  },[])
  let [darkMode, setDarkMode] = React.useState(false)
  React.useEffect(() => {
    localStorage.setItem("notes-Data",JSON.stringify(notes))
  }, [notes])

  return (
    <div className={darkMode?"dark-container":""}>
    <div className="container">
      <Header handleMode={setDarkMode} darkMode={darkMode} />
      <Search handelSearch={setSearchText} />
      <NoteList notes={notes.filter((e) =>
        e.note.toLowerCase().includes(searchText))} handeladdnote={addNote} deletNote={deletNote} darkMode={darkMode} />
      </div>
      </div>
  )

}

