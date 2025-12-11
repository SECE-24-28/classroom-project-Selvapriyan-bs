import React, { useContext } from 'react'
import DataContext from './DataContext'
export const One = () => {
    const {name}=useContext(DataContext)
  return (
    <>
        <h1>hai {name}</h1>
    </>
  )
}

export default One