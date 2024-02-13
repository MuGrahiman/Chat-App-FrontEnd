// import React, { useEffect, useState } from "react";
// import SideBar from "../Components/SideBar";
// import OpenConversation from "../Components/OpenConversation";
// import Conversations from "./Contacts";
// import NewGroupModal from "./NewGroupModal";
// import NewConnectionModal from "./NewConnectionModal";
// import NewChannelModal from "./NewChannelModal";
// import Channel from "./Channel";
// import Contacts from "./Connections";

// const CHATS_KEY = "Chats";
// const CHANNEL_KEY = "Channels";
// const CONNECTION_KEY = "Connections";
// const Items = [
// 	{
// 		ItemKey: CHATS_KEY,
// 		Component: Conversations,
// 		ModalComponent: NewGroupModal,
// 	},
// 	{
// 		ItemKey: CHANNEL_KEY,
// 		Component: Channel,
// 		ModalComponent: NewChannelModal,
// 	},
// 	{
// 		ItemKey: CONNECTION_KEY,
// 		Component: Contacts,
// 		ModalComponent: NewConnectionModal,
// 	},
// ];
// const Chat = ({ openConversation, setOpenConversation }) => {
// 	// const [openConversation, setOpenConversation] = useState(null);
// 	const [activeKey, setActiveKey] = useState(CHATS_KEY);

// 	useEffect(() => {
// 		console.log("chat id in openConversation");
// 		console.log(openConversation);
// 	}, [openConversation]);

// 	return (
// 		<div className="h-100">
// 			{/* {openConversation ? (
// 				<OpenConversation
// 					{...openConversation}
// 					closeConversation={() => setOpenConversation(null)}
// 				/>
// 			) : ( */}
// 			<SideBar
// 				activeKey={activeKey}
// 				setActiveKey={setActiveKey}
// 				Items={Items}
// 				openChat={({ type, id }) => setOpenConversation({ type, id })}
// 			/>
// 			{/* )} */}
// 		</div>
// 	);
// };

// export default Chat;
