import React from 'react'
import { useForm } from "react-hook-form";
import { createTasks, deleteTasks, updateTasks, getTasks } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { toast } from "react-hot-toast";

export  function TasksFormPage() {

  const navigate = useNavigate()

  const params = useParams()

  const {register, handleSubmit, formState: {errors}, setValue } = useForm()

  const onSubmit = handleSubmit(async data => {
    if(params.id) {
     await  updateTasks( data, params.id)
     toast.success('Tarea actualizada', {position: "bottom-right", style: {
      background: "#101010",
      color: "#fff"
    }})
    }else{
      await createTasks(data)
      toast.success('Tarea creada', {position: "bottom-right", style: {
        background: "#101010",
        color: "#fff"
      }})
    }
    navigate("/")
  })

  useEffect(()=> {
    async function loadTask()  {
      if(params.id){
         const res = await getTasks(params.id)
        setValue('title', res.data.title)
        setValue('description', res.data.description)
        }
    }
    loadTask()
  }, [])

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='title' {...register("title", {required: true})} className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
        {errors.title && <span>ESTE CAMPO ES REQUERIDO</span> }

        <textarea rows="10" placeholder='description' {...register("description", {required: true})} className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' ></textarea>
        {errors.description && <span>ESTE CAMPO ES REQUERIDO</span> }

        <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3' >SAVE</button>
        {params.id && <div className='flex justify-end'><button className='bg-red-500 p-3 rounded-lg w-48 mt-3' onClick={async () => {
          const accept = window.confirm("Estas seguro?")
          if(accept) {
          await  deleteTasks(params.id)
          toast.success('Tarea eliminada', {position: "bottom-right", style: {
            background: "#101010",
            color: "#fff"
          }})
          navigate("/tasks")
          }
        }}>DELETE</button></div> }
      </form>
    
    </div>
  )
}
