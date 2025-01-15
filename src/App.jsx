import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'

function App() {
   const [todos, setTodos] = useState([]);

   function addTodo(todo){
    setTodos([...todos,{id: todos.length + 1, text: todo}]);
   }

   function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function editTodo(id,newTodo){
    if(newTodo.trim()){
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newTodo } : todo))); 
      }
  }


  return (
    <div className="bg-fuchsia-50 m-0 p-0 box-border">
      <Header/>
      <ToDoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
    </div>
  )
}

export default App
