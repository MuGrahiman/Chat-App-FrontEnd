import React, { useEffect, useState } from "react";
import { Badge, Form, InputGroup, ListGroup } from "react-bootstrap";
import { MdPersonSearch } from "react-icons/md";
import { useSelector } from "react-redux";
import CardComponent from "./Card";
import ListComponent from "./ListComponent";
import { Link } from "react-router-dom";

const ChatList = ({ activeKey, setActiveKey }) => {
	const Chats = useSelector((state) => state.contacts.chatList);
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
		item && (
			(() => {
				const { type, chat } = item;
				let chatName, chatId, chatImg;
				const recipient =
					chat && chat?.participants?.filter((r) => r._id !== user.id);
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
				);
			})()
		)  
	
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
			{chatList&&chatList.length ? (
				<ListComponent
					variant="flush"
					Class="gap-1 p-2"
					Contents={chatList}
					Customize={renderItems}
				/>
			) : (
				<div className="text-center">
					<p>
						don`t have any connection yet .<br />
						<b>
							<Link onClick={() => setActiveKey("Connections")}>
								make new connection
							</Link>
						</b>
					</p>
				</div>
			)}
		</>
	);
};

export default ChatList;
