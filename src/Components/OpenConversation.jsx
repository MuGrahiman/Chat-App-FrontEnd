import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, CloseButton, Form, InputGroup } from "react-bootstrap";
import { IoMdMore, IoMdArrowDropleft } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getChats, postChat } from "../Store";
import Each from "./Each";
import ProfileOffcanvas from "./ProfileOffcanvas";
import ChatProfile from "./ChatProfile";

const OpenConversation = ({ type, id, closeConversation }) => {
	useEffect(() => {
		dispatch(
			type === "private" ? getChats({ type, id }) : getChats({ type, id })
		);
	}, []);

	const Message = useSelector((state) => state.chat.messages);
	const user = useSelector((state) => state.user.currentUser);
	const [text, setText] = useState("");
	const [modal, setModal] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleToggle = () => {
		setLoading(true);
		if (modal) {
			setTimeout(() => {
				setModal(false);
				setLoading(false);
			}, 300);
		}
		setModal(true);
		setShowProfile(!showProfile);
		setLoading(false);
	};
	const dispatch = useDispatch();

	const setRef = useCallback((node) => {
		node && node.scrollIntoView({ behavior: "smooth" });
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text) return alert("Enter your text");
		dispatch(
			type === "private"
				? postChat({ type, id, text })
				: postChat({ type, id, text })
		);
		setText("");
	};

	return (
		<div className="h-100 d-flex flex-column flex-grow-1 ">
			<nav className="p-2 bg-secondary text-white d-flex align-items-center justify-content-between">
				<button
					onClick={closeConversation}
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

			<>
				<div className="flex-grow-1 overflow-auto bg-light position-relative">
					{!modal ? (
						<div className="d-flex flex-column text-black align-items-start justify-content-end px-3">
							{Message &&
								Message.map((item, index) => (
									<div
										key={index}
										ref={index === Message.length - 1 ? setRef : null}
										className={`my-1 d-flex flex-column ${
											item.sender._id === user.id
												? "align-self-end align-items-end"
												: "align-items-start"
										}`}>
										<div
											className={`rounded px-2 py-1 ${
												item.sender._id === user.id
													? "bg-primary text-white"
													: "border"
											}`}>
											{item.text}
										</div>
										<div
											className={`text-muted small ${
												item.sender._id === user.id ? "text-right" : ""
											}`}>
											{item.sender._id === user.id
												? "You"
												: item.sender.userName}
										</div>
									</div>
								))}
						</div>
					) : (
						<ChatProfile
							open={showProfile}
							onClose={() => setModal(false)}
						/>
					)}
				</div>
			</>

			{!modal && (
				<Form onSubmit={handleSubmit}>
					<Form.Group className="m-2">
						<InputGroup>
							<Form.Control
								as="textarea"
								required
								value={text}
								onChange={(e) => setText(e.target.value)}
								placeholder="Type your message..."
							/>
							<Button type="submit">Send</Button>
						</InputGroup>
					</Form.Group>
				</Form>
			)}
		</div>
	);
};

export default OpenConversation;
