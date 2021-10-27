import React from 'react'
import Addnote from './Addnote'
import Notes from './Notes'

function Notelist({value,handlesave,deletehandle}) {
    return (
        <React.Fragment> {
        
             
                 <div className="note-list">
                  {
                      value.map((curr,i)=>{
                          return(
                        <Notes key={i} objectvalue={curr} deletehandle={deletehandle}/>
                          )
                      })
                  }
                  <Addnote handlesave={handlesave}/>

                 </div>
                 
             
        
        }
        </React.Fragment>
       

    )
}

export default Notelist
