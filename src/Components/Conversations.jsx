import React from "react";
import { ListGroup } from "react-bootstrap";
import Each from "./Each";
import { useSelector } from "react-redux";

const Conversations = ({ setModal }) => {
	const Chats = useSelector((state) => state.contacts.chats);
	const user = useSelector((state) => state.user.currentUser);
	return (
		<ListGroup
			variant="flush"
			className="p-2">
			{Chats && (
				<Each
					of={Chats}
					render={(item, index) => (
						<ListGroup.Item
							action
							className="border rounded mb-1"
							onClick={() => setModal(item?.chat?._id)}
							// active={conversations.selected}
						>
							{item.chat &&
								item?.chat?.participants
									?.filter((r) => r._id !== user.id)
									?.map((r) => r.userName)}
						</ListGroup.Item>
					)}
				/>
			)}

			{/* <ListGroup.Item
				action
				onClick={() => selectConversationIndex(index)}
				active={conversations.selected}
				onClick={() => setModal(true)}>
				Maji
			</ListGroup.Item>
			<ListGroup.Item
				action
				onClick={() => setModal(true)}
				active>
				Majeed
			</ListGroup.Item> */}
		</ListGroup>
	);
};

export default Conversations;
