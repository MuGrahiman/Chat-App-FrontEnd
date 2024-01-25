import React from 'react';
import { ListGroup } from 'react-bootstrap';
// import { useConversations } from "../Contexts/ConversationsProvider";

const Conversations = ({setModal}) => {
	// const { conversations,selectConversationIndex } = useConversations();
	// console.log(conversations);
	return (
		<ListGroup variant="flush">
			{/* {conversations.map((conversations, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversations.selected}
        >
          {conversations.recipients.map((r) => r.name).join(", ")}
        </ListGroup.Item>
      ))} */}
			<ListGroup.Item
				action
				// onClick={() => selectConversationIndex(index)}
				// active={conversations.selected}
				onClick={() => setModal(true)}>
				{/* {conversations.recipients.map((r) => r.name).join(", ")} */}
				Maji
			</ListGroup.Item>
			<ListGroup.Item
				action
				onClick={() => setModal(true)}
				active>
				Majeed
			</ListGroup.Item>
		</ListGroup>
	);
};

export default Conversations;
