import React from 'react'
import { useContext } from 'react'
import { DataContext } from './Context/DataContext'
const Search = () => {
  const {search,setSearch}=useContext(DataContext);
  return (
    <div>
    <input type="text" value={search} placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default Search