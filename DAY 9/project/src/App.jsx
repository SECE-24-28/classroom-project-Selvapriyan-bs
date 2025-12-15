import './App.css'
import stu_api from './Api/stu_api.jsx'
import { useEffect,useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
const [list,setlist]=useState([])
useEffect(()=>{
  const fetchData=async()=>{
       const res=await stu_api.get("http://localhost:3500/User")
       setlist(res.data)
  }
  fetchData()
},[])
  return (
    <>
    {
    list.map((stu)=>
          <p key={stu.id}>
            {stu.id} - {stu.name} - {stu.email} -{stu.password}-{stu.role}
          </p>
    )
  }
    </>
  )}

export default App
