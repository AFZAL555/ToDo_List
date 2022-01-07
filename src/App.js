import React,{useState} from 'react'
import Header from './Header'
import './App.css';
import Tasks from './Tasks'; 

const App = ()=> {
    
const [tasks,setTask]= useState([
    {
        id:1,
        text:"Going to Shop",
        day:'9 Jan 2022 at 4.00pm',
        reminder:true,
    },
    {
        id:2,
        text:"Going to Watch Movie",
        day:'9 Jan 2022 at 7.00pm',
        reminder:true,
    },
    {
        id:3,
        text:" Dinner at MRA",
        day:'9 Jan 2022 at 10.00pm',
        reminder:true,
    }
])

const deleteTask=(id)=>{
    setTask(tasks.filter((task)=> task.id !==id))
    console.log('delete',id)
}
const toggleReminder = (id)=>{
    setTask(tasks.map((task)=>task.id===id ?{...task,reminder: !task.reminder} : task
    )
    )
    console.log(id)
}


    return (
        <div className='container'>
            <Header />
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:<h3 style={{ color:"aqua"}}>No Task...!</h3>}
        </div>
    )
}

export default App
