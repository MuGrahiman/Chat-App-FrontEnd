import axios from "axios";

const API = axios.create({ baseURL: `http://localhost:5000/api` });
API.interceptors.request.use((req) => {
	const JSONValue = localStorage.getItem("CHAT-APP-CLONE-USER");

	JSONValue &&
		JSON.parse(localStorage.getItem("CHAT-APP-CLONE-USER")).token &&
		(req.headers.Authorization = `Bearer ${JSON.parse(JSONValue).token}`);

	return req;
});

export const userRegister = (data) => API.post("user/register", data);
export const userPostOTP = ({ id, data }) =>
	API.post(`/otp/${id}`, { otp: data });
export const userResendOtp = (id) => API.get(`/otp/${id}`);
export const userLogin = (data) => API.post("user/Login", data);
export const getAllUsers = () => API.get("user/get/all");
export const getUser = (id) => API.get(`user/get/${id}`);
 
export const getAllUserContacts = () => API.get("contact/user");
export const toggleFollowStatus = (id) => API.patch(`contact/user`,id);
export const deleteChat = (id) => API.delete(`contact/user`, id);
export const createGroup = (data) => API.post("contact/group", data);
export const removeGroup = (id) => API.delete(`contact/group`, id);
export const createChannel = (data) => API.post("contact/channel", data);
// export const getAllGroups = () => API.get("contact/channel");
// export const joinGroup = (id) => API.patch(`contact/channel`, id);

export const getChat = ({ chatType, chatId }) => API.get(`chat/${chatType}/${chatId}`);
export const postChat = ({ type, id, text }) =>
	API.post(`chat/${type}/${id}`, {text});

export const getAllMessages = (msgId) => API.get(`chat/msg/${msgId}`);
export const postMessage = (msgId) => API.post(`chat/msg/${msgId}`);

export const checkConnection = (id) => API.get(`contact/connection/${id}`);
export const createConnection = (id) => API.post(`contact/connection/${id}`);
