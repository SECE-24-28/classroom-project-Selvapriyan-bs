import { useContext } from 'react'
import {DataContext} from './DataContext'
const Two = () => {
 const {inc} =useContext(DataContext)
  return (
    <>
    <button onClick={inc}>+</button>
    </>
  )
}

export default Two