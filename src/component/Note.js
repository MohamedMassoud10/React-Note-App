import React from "react"
export default function Note({ id, Date, text, deletNote ,darkMode}) {
    return (
        <div className = {darkMode?"dark-note":"note"} >
            <div className="title">
                {text}
            </div>
            <div className="footer-note">
                <div className="date">{Date}
                    <div className="time">
                        
                </div>
                </div>
                <div className="trash"><i class="fa-solid fa-trash-can" onClick={()=>deletNote(id)}></i></div>
            </div>

        </div>
    )
}