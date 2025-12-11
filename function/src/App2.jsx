import React, { use, useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './App.css'
const App2 = () => {

    const [list,setlist]=useState([
        {id:1,name:"Rahul",fee:true},
        {id:2,name:"Arun",fee:false},
        {id:3,name:"Ravi",fee:true} 
    ])
    const [orlist,setorlist]=useState(list)
    const [name,setname]=useState();
 const handleDelete=(id)=>{
    const newList=list.filter((ls)=>ls.id!==id)
    setlist(newList)
    setorlist(newList)
}
const checkbox=(id)=>{
    const newlist=list.map((ls)=>ls.id==id ? {...ls,fee:!ls.fee}:ls)
    setlist(newlist)
    setorlist(newlist)
}
const find=(name)=>{
    const val=name.toLowerCase().trim()
    if(val==""){
    setlist(orlist)
    return;
    }
    const newlist=orlist.filter((ls)=>ls.name.toLowerCase().includes(val))
    setlist(newlist)
}
const add=(name,inref)=>{
    const ist1=({id:list.length+1,name:name,fee:false})
    setlist([...list,ist1])
    setorlist([...orlist, ist1])  
    inref.current.value=""
}
  return (
    <>
    <Header title={"Student List"}
    dep={"CSE"} year={2028}/> 
    <Body list={list} handleDelete={handleDelete}
    checkbox={checkbox} add={add} find={find}/>
    <Footer len={list.length}/>
    </>
  )
}

export default App2