import { useContext } from 'react'
import {DataContext} from './DataContext'
const Three = () => {
  const {de}=useContext(DataContext)
    return (
      <>
      <button onClick={de}>-</button>
      </>
    )
}

export default Three