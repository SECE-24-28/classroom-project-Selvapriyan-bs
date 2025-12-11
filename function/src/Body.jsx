import { useRef, useState } from 'react'
import React, { use } from 'react'

const Body = ({list,handleDelete,checkbox,add,find}) => {
    const inref=useRef();
    const finref=useRef();
  return (
   <>
   <input type="text" ref={inref}/>
   <button onClick={()=>add(inref.current.value,inref)}>Add</button>
   <br />
   <input type="text" ref={finref} placeholder="Enter the name to search" onChange={(e)=>find(e.target.value.toLowerCase().trim())}/>
   <ul>
   {list.map((ls)=>(
   <li key={ls.id}>
     <input type="checkbox" checked={ls.fee} onChange={()=>checkbox(ls.id)}/>
    {ls.name}
    <button onClick={()=>handleDelete(ls.id)}>Delete</button>
   </li>
   ))}
   </ul>
   </>
  )
}

export default Body