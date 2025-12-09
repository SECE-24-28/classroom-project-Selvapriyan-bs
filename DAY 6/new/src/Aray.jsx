import React from 'react'
import  Header  from './Header'
import Content from './Content' 

const Aray = () => {
  const frnds = ["sagar","saurabh","sanket","sahil","shubham"]

  return (
 <>
  <Header title="Friend List" city="Chennai"/>
  {
      (frnds.length) ?
      <Content frnd={frnds}/>
      :(
        <p>List is Empty</p>
      )
      }     
 </>
 )
}
export default Aray;