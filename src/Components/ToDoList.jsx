import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({todos,addTodo,deleteTodo,editTodo}) => {

    //useState to handle input values
    const [inputValue, setInputValue] = useState("");

    function handleInputValue(e) {
        setInputValue(e.target.value);
    }


    function handleAddTodos() {
        if (inputValue.trim() !== '') {
            addTodo(inputValue);
            setInputValue('');
        }
    }


    return (
        <div className="h-screen flex justify-center">

            <div className="border-2 rounded-md h-fit mt-32 p-6 flex flex-col gap-8 shadow-lg shadow-gray-400">
                <div className=" max-w-fit">

                    <input type="text" name="task"
                        className="border-0 outline-none rounded-tl-lg rounded-bl-lg w-72 h-12 p-3 bg-slate-200 placeholder:text-m"
                        placeholder="Add To-Do"
                        value={inputValue}
                        onChange={handleInputValue} 
                       />

                    <button type="submit"
                        className="bg-red-600 text-slate-50 text-lg p-2 w-20 h-12 rounded-tr-lg rounded-br-lg hover:bg-red-500 "
                        onClick={handleAddTodos}>Add
                    </button>

                </div>

                <ul>
                {todos.map((todo) => {
                    return <ToDoItem  key={todo.id} todo={todo}  deleteTodo={deleteTodo} editTodo={editTodo}/>
                })}

                </ul>

            </div>

        </div>
    )
}

export default ToDoList