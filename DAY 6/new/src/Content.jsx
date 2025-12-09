import React from 'react'

const Content = ({frnd}) => {
  return (
  <div>
  <ul>
    {
        frnd.map((val,index)=>(
            <li key={index}>{val}</li>
        )
    )
    }
  </ul>
  </div>
  )
}

export default Content