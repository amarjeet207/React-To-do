import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'

function App() {

  return (
    <div className="bg-fuchsia-50 m-0 p-0 box-border">
      <Header/>
      <ToDoList/>
    </div>
  )
}

export default App
