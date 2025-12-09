import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content from './Content'

function App() {
  const [bestStudent, setBestStudent] = useState("");

  function demo() {
    alert("hello");
  }

  function press() {
    let bs = ["Smith", "Venca", "Will"];
    let num = Math.floor(Math.random() * 3);
    setBestStudent(bs[num]);
  }
  return (
    <>
    <div className='body'>
      <button onClick={() => demo()}>Click me</button>
      <p>Best student: {bestStudent}</p>
      <button onClick={press}>student</button>
      <Header/>
    <Content/>
    </div>
    </>
  );
}

export default App
