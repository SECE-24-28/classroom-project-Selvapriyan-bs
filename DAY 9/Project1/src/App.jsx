import {  useContext, useEffect, useState } from 'react'
import Home from  './home.jsx'
import './App.css'
import Search from './Search.jsx'
import AddPost from './AddPost.jsx'
import { DataProvider } from './Context/DataContext.jsx';

function App() {

  return (
    <>
<DataProvider>
    <AddPost />  
    <Search />
    <Home />
    </DataProvider>
    </>
  )
}
export default App
