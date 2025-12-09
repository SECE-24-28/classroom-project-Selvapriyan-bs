import { useState } from 'react'
import './App.css'


function App(){
const [list,setlist]=useState([
  {id:1,sname:"Arun",Fee:true},
  {id:2,sname:"Kamala",Fee:true},
  {id:3,sname:"Ajith",Fee:false}
]);
  const handledelete=(id)=>{
  const newlist=list.filter((ls)=>ls.id!=id)
  setlist(newlist);
}
const Checkbox=(id)=>{
const newlist=list.map((ls)=>ls.id==id ?{...ls,Fee:!ls.Fee}:ls)
setlist(newlist);
}
  return (
    <>
    <h1>Student List</h1>
    <hr />
    <ul>
   {list.map((ls)=>(
   <li key={ls.id}>
     <input type="checkbox" checked={ls.Fee} onChange={()=>Checkbox(ls.id)}/>
    {ls.sname}
    <button onClick={()=>handledelete(ls.id)}>Delete</button>
   </li>
   ))}
   </ul>
   <h2>Student Count : {list.length}</h2>
    </>
  );
}

export default App
