import React, { useState } from 'react'
import SideBar from '../Components/SideBar';
import OpenConversation from '../Components/OpenConversation';

const Chat = () => {
    const [openConversation, setOpenConversation] = useState(false)
  return (
		<div className="h-100">
			{openConversation ? (
				<OpenConversation setModal={setOpenConversation} />
			) : (
				<SideBar setModal={setOpenConversation} />
			)}
		</div>
	);
}

export default Chat