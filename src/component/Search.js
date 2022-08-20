import React from "react";

export default function Search({ handelSearch }) {
    function handelChange(event) {
        handelSearch(event.target.value)
    }
    return (
        <div className="search">
                <i class="fa-solid fa-magnifying-glass"></i>
            <input onChange={handelChange}
                type="text" placeholder="search.." />
        </div>
    )
}