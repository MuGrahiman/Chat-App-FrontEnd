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
export const getAllUser = () => API.get("user/get");
export const getAllUserContacts = () => API.get("contact");
export const toggleFollowStatus = (id) => API.patch(`contact`,id);
export const getAllUserChats = (id) => API.get(`chat/${id}`);
export const postChat = ({chatId,text}) => API.post(`chat/${chatId}`, {text});
