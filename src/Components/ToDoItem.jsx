import React, { useState } from 'react'
import notCompleted from '../assets/circle-regular.svg';
import Completed from '../assets/circle-check-solid.svg';
import deleted from '../assets/circle-xmark-solid.svg';
import Edit from '../assets/pen-to-square-solid.svg';

const ToDoItem = ({todo,deleteTodo,editTodo}) => {

    const [isCompleted, setIsCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue,setEditedValue] = useState('');
    const [text,setText] = useState(todo.text);
    

    function handleCompletedStatus() {
        setIsCompleted(!isCompleted);
    }

    function handleEditToggle() {
        setIsEditing(!isEditing);
    }
    function handleEditValue(e){
        setEditedValue(e.target.value);
    }

    function handleSaveEditText(){
        if (isEditing) {
            editTodo(todo.id, editedValue);
            if(editedValue.trim()){
                setText(editedValue)
            }
            setIsEditing(false);
            setEditedValue('')
          }
    }
   

    return (

        <div className="flex flex-col gap-2">
            <li className=" flex w-fit gap-4 ">
                <span className={isCompleted ? "text-xl text-slate-600 line-through" : "text-xl"} >{todo.id} - {text}</span>
                <img src={isCompleted ? Completed : notCompleted} className="w-5" onClick={handleCompletedStatus} />
                <img src={Edit} className="w-5" onClick={handleEditToggle} />
                <img src={deleted} className="w-5" onClick={()=>deleteTodo(todo.id)} />
            </li>

            {isEditing && ( <div className="flex gap-4"> 
                    <input type="text" className="w-48 border-2 outline-none p-1" placeholder='Edit' 
                    onChange={handleEditValue} value={editedValue}/> 
                <img src={Completed} className="w-4"onClick={handleSaveEditText}/> 
               </div> )}
        </div>

    )
}

export default ToDoItem