import React, { useState } from 'react'

function Addnote({ handlesave }) {



    const [textvalue, settextvalue] = useState("");
    const variablecount=500;

    const handleonchange = (e) => {
        if(variablecount-e.target.value.length>=0){
            settextvalue(e.target.value)
        }
    }
    const handleonclick = () => {
        if(textvalue.trim().length>0){
            handlesave(textvalue)  
            settextvalue("")
        }
    }
    return (
        <div className="note newone">
            <textarea rows="8" column="10" placeholder="Add text here..." value={textvalue} onChange={handleonchange} />

            <div className="footer-sec">

                <small className="wordsremain">{variablecount-textvalue.length} remaining</small>
                <h4 className="save" onClick={handleonclick}>Save</h4>
            </div>
        </div>
    )
}

export default Addnote
