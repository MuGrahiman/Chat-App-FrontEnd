import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CloseButton, Form, InputGroup } from "react-bootstrap";
import { IoMdMore, IoMdArrowDropleft } from "react-icons/io";
import MessageBox from "./MessageBox";
import ChatBody from "./ChatBody";
import ChatProfile from "./ChatProfile";
import { getAllMessages } from "../Store";
import { useDispatch, useSelector } from "react-redux";

const ChatInterface = ({ chat }) => {
	const [modal, setModal] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		//# change chat into chatId 
		chat.chat && dispatch(getAllMessages(chat.chat));
	}, [chat.chat]);

	const handleToggle = () => {
		setShowProfile((prevModal) => {
			setLoading(true);
			if (!modal) {
				setModal(!modal);
				setLoading(false);
			} else {
				setTimeout(() => {
					setModal(!modal);
					setLoading(false);
				}, 300);
			}
			return !prevModal;
		});
	};

	return (
		<div className="h-100 d-flex flex-column flex-grow-1 ">
			<nav className="p-2 bg-secondary text-white d-flex align-items-center justify-content-between">
				<button
					onClick={() => navigate("/dashboard")}
					className="btn text-white">
					<IoMdArrowDropleft size={20} />
				</button>
				<span>Go back</span>
				<button
					disabled={loading}
					className="btn text-white"
					onClick={handleToggle}>
					{modal ? <CloseButton variant="white" /> : <IoMdMore />}
				</button>
			</nav>

			{!modal ? (
				<ChatBody />
			) : (
				<ChatProfile
					open={showProfile}
					onClose={() => setModal(false)}
				/>
			)}
		</div>
	);
};

export default ChatInterface;
