import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let num=[10,20,30]
  let [count,setCount]=useState(0)
  // let [age, setAge] = useState(21)
  // setAge(22)  
  function counted(){
    setCount(count+1)
  }
  function dec(){
     if(count<=0){
      return
    }
    setCount(count-1)
  }
  return (
    <>
      {/* {
        variables can also be declared in this area also
      } */}
      <h2>Count is {count}</h2>
        <button onClick={()=>dec()}>-</button>
      <button onClick={()=>counted()}>+</button>
    
    </>
  )
}

export default App
