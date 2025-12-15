import './App.css'
import {DataProvider} from './DataContext'
import One from './One'
import Two from './Two'
import Three from './Three'
function App() {
  return (
    <>
    <DataProvider>
      <One/>
      <Three/>
      <Two/>
    </DataProvider>
    </>
  )
}

export default App
