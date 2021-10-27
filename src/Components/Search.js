import React from 'react'
import {MdSearch} from "react-icons/md"
function Search({handlesearch}) {
    return (
        <div className="search">
           <MdSearch className="search-icon" size="1.3rem"/> 
           <input type="text" placeholder="Find Your Notes...." onChange={(e)=>handlesearch(e.target.value)} />

        </div>
    )
}

export default Search
