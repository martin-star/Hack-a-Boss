import axios from 'axios';


const BASE_URL = 'https://5dda901c5730550014fe78e2.mockapi.io/api/v1';

export function getTask(){
    return axios.get(`${BASE_URL}/todo`);
}

export function addTask(task){
    return axios.post(`${BASE_URL}/todo`,{...task});
}

export function updateTask(task){
    return axios.post(`${BASE_URL}/todo/${task.id}`,{...task});
}

export function deletTask(id){
    return axios.delete(`${BASE_URL}/todo/${id}`);
}
