import React, { useEffect } from "react";
import SideBar from "./SideBar";
import OpenConversation from "./OpenConversation";
import { useConversations } from "../Contexts/ConversationsProvider";
import Chat from "../Pages/Chat";
import Blog from "./Blog";

import { useDispatch } from "react-redux";
import { getAllUsers, getAllUserContacts } from "../Store";
const Dashboard = ({ id }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUsers());
		dispatch(getAllUserContacts());
	}, []);
	return (
		<div
			style={{ height: "100vh" }}
			className="d-flex">
			<Chat />
			<Blog /> 
		</div>
	);
};

export default Dashboard;
