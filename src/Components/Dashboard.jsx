import React from 'react';
import SideBar from './SideBar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../Contexts/ConversationsProvider';

const Dashboard = ({ id }) => {
	// const { selectedConversation } = useConversations();
	return (
		<div
			style={{ height: '100vh' }}
			className='d-flex'>
			<SideBar id={id} />
			{/* {selectedConversation &&
       } */}
			<OpenConversation />
		</div>
	);
};

export default Dashboard;
