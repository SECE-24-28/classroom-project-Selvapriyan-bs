import {DataContext} from './DataContext'
import { useContext } from 'react'
export const One = () => {
    const {num}=useContext(DataContext)
  return (
    <>
    <h1>Count:{num}</h1>
    </>
  )
}

export default One
