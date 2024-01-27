import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar';
import OpenConversation from '../Components/OpenConversation';

const Chat = () => {
    const [openConversation, setOpenConversation] = useState('')
	useEffect(() => {
		console.log('chat id in openConversation');
		console.log(openConversation);
	}, [openConversation]);
	
  return (
		<div className="h-100">
			{openConversation ? (
				<OpenConversation
					id={openConversation}
					setModal={setOpenConversation}
				/>
			) : (
				<SideBar setModal={setOpenConversation} />
			)}
		</div>
	);
}

export default Chat