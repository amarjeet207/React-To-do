import React, { useState } from 'react'
import notCompleted from '../assets/circle-regular.svg';
import Completed from '../assets/circle-check-solid.svg';
import deleted from '../assets/circle-xmark-solid.svg';
import Edit from '../assets/pen-to-square-solid.svg';

const ToDoItem = ({task}) => {

    const [isCompleted, setIsCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue,setEditedValue] = useState('');
    const [text,setText] = useState(task);

    function handleCompletedStatus(e) {
        setIsCompleted(!isCompleted);
    }

    function handleDeletion(e) {
        e.target.parentElement.remove();
    }

    function handleEditTask() {
        setIsEditing(!isEditing);
    }

    function handleEditValue(e){
        setEditedValue(e.target.value);
    }

    function handleSaveEditText(){
        if(editedValue.trim()){
        setText(editedValue);
        setIsEditing(!isEditing)
        }
    }

    function handleNotEdit(e){
        e.target.parentElement.remove();
    }

    if (!task) { // Do not render the component if task has no value or is deleted }
        return null;
    }

    return (

        <div className="flex flex-col gap-2">
            <li className=" flex w-fit gap-4 ">
                <span className={isCompleted ? "text-xl text-slate-600 line-through" : "text-xl"} >{text}</span>
                <img src={isCompleted ? Completed : notCompleted} className="w-5" onClick={handleCompletedStatus} />
                <img src={Edit} className="w-5" onClick={handleEditTask} />
                <img src={deleted} className="w-5" onClick={handleDeletion} />
            </li>
            
            {isEditing ? ( <div className="flex gap-4"> 
             <input type="text" className="w-48 border-2 outline-none p-1" placeholder='Edit' 
             onChange={handleEditValue}/> 
             <img src={Completed} className="w-4"onClick={handleSaveEditText}/> 
             <img src={deleted} className="w-5" onClick={handleNotEdit} />
             </div> ) 
             : ""}
        </div>

    )
}

export default ToDoItem