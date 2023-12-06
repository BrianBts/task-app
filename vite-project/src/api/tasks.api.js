import axios from 'axios';

const API = axios.create({
   baseURL: 'http://localhost:8000/firstTasks/api/v1/tasks/'
})

export const getAllTasks = () => API.get("/")
export const getTasks = (id) => API.get(`/${id}/`)
export const createTasks = (task) =>  API.post("/", task)
export const deleteTasks = (id) =>  API.delete(`/${id}`)
export const updateTasks = (data,id) =>  API.put(`/${id}/`, data)

