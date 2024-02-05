import React, { useEffect, useState } from "react";
import Chat from "../Pages/Chat";
import Blog from "./Blog";
import OpenConversation from "./OpenConversation";

import { useDispatch } from "react-redux";
import { getAllUsers, getAllUserContacts } from "../Store";
import MyComponent from "./Mycomponent";
const Dashboard = ({ id }) => {
	const [openConversation, setOpenConversation] = useState(null);
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
			<Chat
				openConversation={openConversation}
				setOpenConversation={setOpenConversation}
			/>
			{openConversation && (
				<OpenConversation
					{...openConversation}
					closeConversation={() => setOpenConversation(null)}
				/>
			)}
			{/* <Blog /> */}
		</div>
	);
};

export default Dashboard;
