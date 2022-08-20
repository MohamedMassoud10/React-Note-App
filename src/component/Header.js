import React from "react"
export default function Header({ handleMode,darkMode }) {
    return (
        <header>
        <div className="header-container">
            <div className="title"><h1>Notes</h1></div>
                <div className="btn">
                    <div className="title">Mode</div>
                    <div className={darkMode? "dark":"mode"} onClick={()=>handleMode((prev)=>!prev)}></div>
                </div>
            </div>
        </header>

    )
    
}