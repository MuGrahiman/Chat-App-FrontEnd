import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, CloseButton, Form, InputGroup, Modal, Offcanvas } from "react-bootstrap";
import { IoMdMore, IoMdArrowDropleft } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAllGrpMsgs, getAllPvtMsgs, postGrpMsg, postPvtMsg } from "../Store";
import Each from "./Each";
import ProfileOffcanvas from "./ProfileOffcanvas";
import ChatProfile from "../Pages/ChatProfile";

const OpenConversation = ({ type, id, closeConversation }) => {
	useEffect(() => {
		console.log("chat id");
		console.log(id, type);
		dispatch(
			type === "private"
				? getAllPvtMsgs({ type, id })
				: getAllGrpMsgs({ type, id })
		);
	}, []);

	const Message = useSelector((state) => state[type].messages);
	const user = useSelector((state) => state.user.currentUser);
	const [text, setText] = useState("");
	const [modal, setModal] = useState(false);

	const dispatch = useDispatch();

	const setRef = useCallback((node) => {
		node && node.scrollIntoView({ smooth: true });
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(text, " ", id);
		if (!text) return alert("Enter your text");
		dispatch(
			type === "private"
				? postPvtMsg({ type, id, text })
				: postGrpMsg({ type, id, text })
		);

		setText("");
	};

	return (
		<div className="h-100 d-flex flex-column flex-grow-1 position-relative ">
			<nav className="p-2 bg-secondary text-white d-flex align-items-center justify-content-between">
				<button
					onClick={closeConversation}
					className="btn text-white">
					<IoMdArrowDropleft size={20} />
				</button>
				<span>go back </span>
				<button className="btn text-white">
					{/* {modal ? (
						<CloseButton
							variant="white"
							onClick={() => setModal(false)}
						/>
					) : ( */}
					<IoMdMore onClick={() => setModal(true)} />
					{/*  )}  */}
				</button>
			</nav>

			<div className=" flex-grow-1 overflow-auto bg-secondary">
				<div className=" d-flex flex-column text-black align-items-start justify-content-end px-3">
					{Message && (
						<Each
							of={Message}
							render={(item, index) => (
								<div
									ref={Message.length - 1 === index ? setRef : null}
									className={`my-1 d-flex flex-column ${
										item.sender._id === user.id
											? "align-self-end align-items-end"
											: "align-items-start"
									}`}>
									<div
										className={`rounded px-2 py-1
									  ${item.sender._id === user.id ? "bg-primary text-white" : "border"}`}>
										{item.text}
									</div>
									<div
										className={`text-muted small
									  ${item.sender._id === user.id ? "text-right" : ""}`}>
										{item.sender._id === user.id ? "You" : item.sender.userName}
									</div>
								</div>
							)}
						/>
					)}
				</div>
				<ChatProfile
					open={modal}
					onClose={() => setModal(false)}
				/>
			</div>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="m-2">
					<InputGroup>
						<Form.Control
							as={"textarea"}
							required
							value={text}
							onChange={(e) => setText(e.target.value)}
							style={{ height: "75px", resize: "none" }}
						/>
						<Button type="submit">send</Button>
					</InputGroup>
				</Form.Group>
			</Form>
		</div>
	);
};

export default OpenConversation;
