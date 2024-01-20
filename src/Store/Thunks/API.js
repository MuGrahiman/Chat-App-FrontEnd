import axios from 'axios';

const API = axios.create({ baseURL: `http://localhost:5000/api` });

export const userRegister = (data) => API.post('user/register', data);
export const userPostOTP = ({ id, data }) => API.post(`/otp/${id}`, data);
export const userResendOtp = (id) => API.get(`/otp/${id}`);
export const userLogin = (data) => API.post('user/Login', data);
