import React, { useCallback, useEffect, useState } from "react";
import { Button, CloseButton, Form, InputGroup } from "react-bootstrap";
import { IoMdMore, IoMdArrowDropleft } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getChat, getAllMessages, resetMessage } from "../Store";
import ChatProfile from "./ChatProfile";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import MessageBox from "./MessageBox";

const Chat = ({ type, id, closeConversation }) => {
	const { chatId, chatType } = useParams();

	const { messages, status, error } = useSelector((state) => state.message);

	const Chat = useSelector((state) => state.chat.chat);
	const [text, setText] = useState("");
	const [modal, setModal] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetMessage()); // Reset chat state before fetching new data

		dispatch(getChat({ chatType, chatId }))
			.then((result) => {
				console.log("🚀 ~ .then ~ result:", result);

				dispatch(getAllMessages(result.payload.chat));
			})
			.catch((err) => {
			    console.log("🚀 ~ useEffect ~ err:", err);
			});
	}, []);

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

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text) return alert("Enter your text");
		// dispatch(
		// 	type === "private"
		// 		? postChat({ type, id, text })
		// 		: postChat({ type, id, text })
		// );
		setText("");
	};
	let content;
	if (status === "pending" || "idle") content = <Loader />;
	if (status === "error") content = error;
	if (status === "succeeded")
		content = (
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
								{messages && <MessageBox Message={messages} />}
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
	return content;
};
export default Chat;
