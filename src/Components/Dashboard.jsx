import React, { useEffect } from "react";
import Chat from "../Pages/Chat";
import Blog from "./Blog";

import { useDispatch } from "react-redux";
import { getAllUsers, getAllUserContacts } from "../Store";
const Dashboard = ({ id }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUsers());
		dispatch(getAllUserContacts());
		// dispatch(getAllGroups());
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
