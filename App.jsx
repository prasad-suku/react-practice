// import React from 'react'
import Anothercom from './anothercom'
import './App.css'

function App() {

  // objects value to pass to props on anothercom compononet
   let emp = {
    name:"raju",
    age:20,
    place:"Erode"
   }
  return (
    <>
      <h2> HELLO IM MAIN APP</h2>
     
      <Anothercom name={emp.name} age = {emp.age} place ={emp.place} />
    </>
  )
}



export default App
