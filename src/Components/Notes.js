import React from 'react'
import { MdDeleteForever } from "react-icons/md"

function Notes({objectvalue,deletehandle}) {
    const{id,text,date}=objectvalue;
    return (
        <div className="note">
            <span>{text}</span>
            <div className="footer-sec">
                <small>{date}</small>
                <MdDeleteForever onClick={()=>deletehandle(id)} 
                className="delete-icon" 
                size="1.8rem"/>
            </div>
        </div>
    )
}

export default Notes
