import React from "react";

export default function NewNote({ handeladdnote ,darkMode}) {
    let [note, setnote] = React.useState("")
    let num = 200;
    function handelchange(event) {
        if (num - event.target.value.length >=0 ) {
            setnote(event.target.value)
        }
        console.log(event.target.value.length)
    }
    function handelclick() {
        if (note.trim().length > 0){
            handeladdnote(note)
        }
        setnote("")
    };
    return (
        <div className={darkMode?"dark-new-note":"note new"}>
            <textarea
                cols="10"
                rows="8"
                placeholder="Type to add a note.." onChange={handelchange} ></textarea>
            <div className="footer-note">
                <small>{num-note.length} Remaining</small>
                <div className="btn" onClick={handelclick}>Save</div>
            </div>
        </div>
    )
}