import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {DataProvider} from "./DataContext";
import One from './One' 
import Two from './Two'

function App() {
return (
    <>
     <DataProvider>
     <One/>
     <Two/>
     </DataProvider>
    </>
  )
}

export default App
