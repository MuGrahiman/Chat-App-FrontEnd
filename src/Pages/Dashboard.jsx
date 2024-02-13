import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import Blog from "../Components/Blog";
import OpenConversation from "../Components/OpenConversation";

import { useDispatch } from "react-redux";
import { getAllUsers, getContacts } from "../Store";
import SideBar from "../Components/SideBar";
import Conversations from "./Contacts";
import NewGroupModal from "./NewGroupModal";
import NewConnectionModal from "./NewConnectionModal";
import NewChannelModal from "./NewChannelModal";
import Channel from "./Channel";
import Contacts from "./Connections";

const CHATS_KEY = "Chats";
const CHANNEL_KEY = "Channels";
const CONNECTION_KEY = "Connections";
const Items = [
	{
		ItemKey: CHATS_KEY,
		Component: Conversations,
		ModalComponent: NewGroupModal,
	},
	{
		ItemKey: CHANNEL_KEY,
		Component: Channel,
		ModalComponent: NewChannelModal,
	},
	{
		ItemKey: CONNECTION_KEY,
		Component: Contacts,
		ModalComponent: NewConnectionModal,
	},
];
const Dashboard = ({ id }) => {
	const [openConversation, setOpenConversation] = useState(null);
	const [activeKey, setActiveKey] = useState(CHATS_KEY);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllUsers());
		dispatch(getContacts());
		// dispatch(getAllChannels());
	}, []);
	return (
		<div
			style={{ height: "100vh" }}
			className="d-flex">
			<SideBar
				activeKey={activeKey}
				setActiveKey={setActiveKey}
				Items={Items}
				openChat={({ type, id }) => setOpenConversation({ type, id })}
			/>
			{/* <Chat
				openConversation={openConversation}
				setOpenConversation={setOpenConversation}
			/> */}
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
