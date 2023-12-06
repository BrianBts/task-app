import React from 'react'
import { useEffect, useState } from 'react'
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "../components/TaskCard";

export  function TasksList() {

    const [tasks, setTasks] = useState([])


    useEffect(()=>{

        async function loadTasks(){
         const response = await getAllTasks()
         setTasks(response.data);
         
        }

        loadTasks()

    },[])



  return (
    
    <div className='grid grid-cols-3 gap-3'> {
        tasks.map(task => (
            <TaskCard task={task} key={task.id} />
        ))
        }</div>
  )
}
