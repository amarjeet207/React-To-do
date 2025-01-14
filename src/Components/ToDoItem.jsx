import React, { useState } from 'react'
import notCompleted from '../assets/circle-regular.svg';
import Completed from '../assets/circle-check-solid.svg';
import deleted from '../assets/circle-xmark-solid.svg';
import Edit from '../assets/pen-to-square-solid.svg';

const ToDoItem = (props) => {
    
    const [isCompleted,setIsCompleted] = useState(false);

    function handleCompletedStatus(e){
        setIsCompleted(!isCompleted);
    }

    function handleDeletion(e){
        e.target.parentElement.remove();
    }

    function handleEditTask(e){
        const newTask = prompt(`EDIT: ${e.target.parentElement.childNodes[0].innerHTML}`);
        if(newTask.trim()){
            e.target.parentElement.childNodes[0].innerHTML = newTask;
        }
    }

    if (!props.task ) { // Do not render the component if task has no value or is deleted }
        return null;
     } 

    return (
    <li className=" flex w-fit gap-4 ">
    
    <span className={isCompleted ? "text-xl text-slate-600 line-through" : "text-xl" } >{props.task}</span>
    <img src={isCompleted ? Completed : notCompleted} className="w-5" onClick={handleCompletedStatus}/>
    <img src={Edit} className="w-5" onClick={handleEditTask} /> 
    <img src={deleted} className="w-5" onClick={handleDeletion} /> 

  </li>
  )
}

export default ToDoItem