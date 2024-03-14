import React, { useEffect, useState } from "react";
import Chat from "../Components/Chat";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUsers, getContacts } from "../Store";
import SideBar from "../Components/SideBar";
import ChannelList from "../Components/ChannelList";
import ConnectionList from "../Components/ConnectionList";
import ChatList from "../Components/ChatList";
import NewGroupModal from "../Components/NewGroupModal";
import NewConnectionModal from "../Components/NewConnectionModal";
import NewChannelModal from "../Components/NewChannelModal";

const CHATS_KEY = "Chats";
const CHANNEL_KEY = "Channels";
const CONNECTION_KEY = "Connections";
const Items = [
	{
		EventKey: CHATS_KEY,
		ItemKey: () => <>{CHATS_KEY}</>, 
		Component: ChatList,
		ModalComponent: NewGroupModal,
	},
	{
		EventKey: CHANNEL_KEY,
		ItemKey: () => <>{CHANNEL_KEY} </>,
		Component: ChannelList,
		ModalComponent: NewChannelModal,
	},
	{
		EventKey: CONNECTION_KEY,
		ItemKey: () => <>{CONNECTION_KEY} </>,
		Component: ConnectionList,
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
			<Outlet />
			{/* <Routes>
				<Route
					path="/chat"
					element={<OpenConversation />}
				/>
				<Route
					path="/profile/:id"
					element={<OpenConversation />}
				/>
				<Route
					// exact
					path="/chat"
					element={<OpenConversation />}
				/>
			</Routes> */}

			{openConversation && (
				<Chat
					{...openConversation}
					closeConversation={() => setOpenConversation(null)}
				/>
			)}
		</div>
	);
};

export default Dashboard;
