import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";
export default function NoteList({ notes ,handeladdnote,deletNote,darkMode}) {
    let N = notes.map((note) => <Note text={note.note} id={note.id} Date={note.Date} deletNote={deletNote} darkMode={darkMode} />)
    return (
        <div className="note-list">
            <NewNote handeladdnote={handeladdnote} darkMode={darkMode} />
            {N}
        </div>
    )
}