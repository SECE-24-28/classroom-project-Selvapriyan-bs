import { createContext,useState,useEffect } from "react";
import {format} from  "date-fns"
import React from "react";
import user_api  from '../api/user_api.jsx'
export const DataContext=createContext();

export const DataProvider=({children})=>
    {
        const [list,setlist]=useState([])
const [search,setSearch]=useState("")
const [searchlist,setsearchlist]=useState([])
const [name,setName]=useState("")
const [email,setEmail]=useState("") 
const [password,setPassword]=useState("")
const [role,setRole]=useState("")

//data fetch useEffect
useEffect(()=>{
const fetchdata=async()=>{
const res=await fetch("http://localhost:3500/User")
const resdata=await res.json()
setlist(resdata)
setsearchlist(resdata)
}
fetchdata()
},[])
//search useEffect
useEffect(()=>{
const filtered=list.filter((stu)=>
stu.name.toLowerCase().includes(search.toLowerCase())
)
setsearchlist(filtered)
},[search])
const handlesub=(e)=>{
e.preventDefault()
const id=list.length+1
const datetime=format(new Date(),"yyyy-MM-dd pp")
// newobj={id:id,name:name,email:email,password:password,role:role,date:datetime}
if(name.trim().length===0 || email.trim().length===0 || password.trim().length===0 )
{
  alert("Please fill all the fields")
  return
}
if(role===""){
    alert("Please select a role")
    return
}
const newobj={id,name,email,password,role,datetime}
user_api.post("/User",newobj)
const newlist =[...list,newobj]
setlist(newlist)
setsearchlist(newlist)
setName("")
setEmail("")
setPassword("")
setRole("")
}

        return(
    <DataContext.Provider value={{name,email,password,role,setName,setEmail,setPassword,setRole,handlesub,search,setSearch,searchlist,num:list.length}}>
        {children}
    </DataContext.Provider>
)
    }
