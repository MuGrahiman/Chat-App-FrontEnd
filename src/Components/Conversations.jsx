import React, { useEffect, useState } from "react";
import { Badge, Form, InputGroup, ListGroup } from "react-bootstrap";
import { MdPersonSearch } from "react-icons/md";
import Each from "./Each";
import { useSelector } from "react-redux";

const Conversations = ({ setModal }) => {
	const Chats = useSelector((state) => state.contacts.chats);
	const user = useSelector((state) => state.user.currentUser);
	const [chatList, setChatList] = useState([]);

	useEffect(() => {
		setChatList(Chats);
	}, [Chats]);

	const handleSearch = (searchText) => {
		const text = searchText.trim().toLowerCase();
		const filteredData = Chats.filter((chat) => {
			return chat.chat.participants.some(
				(participant) =>
					participant._id !== user.id &&
					participant.userName.trim().toLowerCase().includes(text)
			);
		});

		setChatList(filteredData);
	};
	
	return (
		<ListGroup
			variant="flush"
			className="gap-1 p-2">
			<InputGroup className="mb-3 rounded-pill border">
				<Form.Control
					className="border-0 rounded-end rounded-pill"
					placeholder="Search name ..."
					onChange={(e) => handleSearch(e.target.value)}
				/>
				<InputGroup.Text className="border-0 bg-white rounded-start rounded-pill">
					<MdPersonSearch />
				</InputGroup.Text>
			</InputGroup>

			{chatList && (
				<Each
					of={chatList}
					render={(item, index) => (
						<ListGroup.Item
							action
							onClick={() => setModal(item?.chat?._id)}
							// active={conversations.selected}
							className="d-flex justify-content-between align-items-start border rounded ">
							<div className="ms-2 me-auto">
								<div className="fw-bold">
									{item.chat &&
										item?.chat?.participants
											?.filter((r) => r._id !== user.id)
											?.map((r) => r.userName)
											.join(" ")}
								</div>
								Cras justo odio
							</div>
							<Badge
								bg="primary"
								pill>
								14
							</Badge>
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
