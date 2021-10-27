import React, { useState,useEffect } from 'react'
import Notelist from './Components/Notelist'
import { nanoid } from "nanoid"
import Search from './Components/Search'

function App() {


  const [content, setcontent] = useState([])
  const [searchtext,setsearchtext]=useState('')





  // getting the data from local storage

  useEffect(()=>{
    const getdata=JSON.parse(localStorage.getItem("react-note-app"));
  
    // after getting data update the content variable
    if (getdata){
      setcontent(getdata);
    }
    },[])

  // adding data inside localstorage
   
  useEffect(()=>{
    localStorage.setItem("react-note-app",JSON.stringify(content));
  },[content])




  // adding the new notes ...
  const savehandle = (text) => {
    const date = new Date();
    const newnote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...content, newnote];
    setcontent(newNotes);
  }

  // delete the notes..
  const deletehandle = (id) => {
    const deletenote = content.filter((curr) => curr.id !== id)
    setcontent(deletenote)
  }


  return (
    <div className="container">
    <h1 className="head"> Note Taker App📓 </h1>
    <Search handlesearch={setsearchtext}/>
      <Notelist value={content.filter((curr)=>{
        return(
          curr.text.includes(searchtext)
        )
      })} 
      handlesave={savehandle} 
      deletehandle={deletehandle} />
    </div>
  )
}

export default App
