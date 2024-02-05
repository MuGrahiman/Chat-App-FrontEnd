import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import OpenConversation from "../Components/OpenConversation";
import Conversations from "../Components/Conversations";
import NewGroupModal from "../Components/NewGroupModal";
import Groups from "../Components/Groups";
import NewConversationModal from "../Components/NewConversationModal";
import Contacts from "../Components/Contacts";
import NewChannelModal from "../Components/NewChannelModal";

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
		Component: Groups,
		ModalComponent: NewChannelModal,
	},
	{
		ItemKey: CONNECTION_KEY,
		Component: Contacts,
		ModalComponent: NewConversationModal,
	},
];
const Chat = ({ openConversation, setOpenConversation }) => {
	// const [openConversation, setOpenConversation] = useState(null);
	const [activeKey, setActiveKey] = useState(CHATS_KEY);

	useEffect(() => {
		console.log("chat id in openConversation");
		console.log(openConversation);
	}, [openConversation]);

	return (
		<div className="h-100">
			{/* {openConversation ? (
				<OpenConversation
					{...openConversation}
					closeConversation={() => setOpenConversation(null)}
				/>
			) : ( */}
			<SideBar
				activeKey={activeKey}
				setActiveKey={setActiveKey}
				Items={Items}
				openChat={({ type, id }) => setOpenConversation({ type, id })}
			/>
			{/* )} */}
		</div>
	);
};

export default Chat;
