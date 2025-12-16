import React from 'react'
import { DataContext } from './Context/DataContext'

const Home = () => {
const {searchlist}=React.useContext(DataContext);
  return (
    <div>
     
        {searchlist.map((stu)=>
        <div key={stu.id}>
        <hr/>
       <h2>{stu.name}</h2> <h3>{stu.email}</h3><h3>{stu.password}</h3><h3>{stu.role}</h3>
        </div> 
)
} 
<hr />
    </div>
  )
}

export default Home