import React, { useEffect, useState } from "react";
import { Badge, Form, InputGroup, ListGroup } from "react-bootstrap";
import { MdPersonSearch } from "react-icons/md";
import { useSelector } from "react-redux";
import CardComponent from "../Components/Card";
import ListComponent from "../Components/ListComponent";

const Contacts = ({ openChat }) => {
	const Chats = useSelector((state) => state.connection.contactList);
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
const renderItems = (item, index) =>
	item
		? (() => {
				const { type, chat } = item;
				let chatName, chatId, chatImg;
				const recipient =
					chat && chat?.participants?.filter((r) => r._id !== user.id);
				console.log(recipient);
				if (type === "Private") {
					chatId = recipient?.map((r) => r._id);
					chatName = recipient?.map((r) => r.userName);
					chatImg = recipient?.map((r) => r.profilePic);
				} else {
					chatId = chat?._id;
					chatName = chat?.chatName;
					chatImg = chat?.profilePic;
				}
				return (
					<ListGroup.Item
						action
						onClick={() => openChat({ type: type.toLowerCase(), id: chatId })}
						// active={chatId}
						className=" border-0  p-0">
						<CardComponent
							cardClass={"flex-row"}
							imgUrl={chatImg}
							imgHeight={"50px"}
							imgWidth={"50px"}
							imgClass={"border-0 rounded-pill  m-auto  img-thumbnail"}
							bodyClass={"p-2"}
							title={chatName}
							subTitle={type}
							footerFun={() => (
								<Badge
									bg="primary"
									pill>
									14
								</Badge>
							)}
							footerClass={" bg-transparent border-0 "}
						/>
					</ListGroup.Item>
				);
		  })()
		: null;

	return (
		<>
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

			<ListComponent
				variant="flush"
				Class="gap-1 p-2"
				Contents={chatList}
				Customize={renderItems}
			/>
		</>

	);
};

export default Contacts;
