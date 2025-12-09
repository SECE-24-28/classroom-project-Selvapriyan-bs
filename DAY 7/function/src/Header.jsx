import React from 'react'
import App2 from './App2'
import './App.css'
const Header = (props) => {
  return (
    <>
    <h1>{props.title}-{props.dep}-{props.year}</h1>
    </>
  )
}

export default Header