import React from 'react'
import './App.css';
import {FaTimes} from "react-icons/fa"
const Task = ({task,onDelete,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>
            onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color:"red",cursor:"pointer"}}
             onClick={()=>onDelete(task.id)}/>
            </h3><br />
            <p className='time'>{task.day}</p>
        </div>
    )
}

export default Task
