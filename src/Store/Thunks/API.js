import axios from "axios";

const API = axios.create({baseURL:`http://localhost:5000/api`});


export const registerUser =(data)=> API.post('user/register',data)
export const loginUser =(data)=> API.post('user/Login',data)