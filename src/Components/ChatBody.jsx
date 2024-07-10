import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import MessageBox from "./MessageBox";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import useSwitch from "../Hooks/useSwitch";

const ChatBody = () => {
	const { messages, status, error } = useSelector((state) => state.message);
	console.log("🚀 ~ ChatBody ~ status:", status);

	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text) return alert("Enter your text");
		//* when posting msg there contain only chatId and content
		// dispatch(
		// 	type === "private"
		// 		? postChat({ type, id, text })
		// 		: postChat({ type, id, text })
		// );
		setText("");
	};

	const Interface = () => (
		<>
			<div className="flex-grow-1 overflow-auto bg-light position-relative">
				<div className="d-flex flex-column text-black align-items-start justify-content-end px-3">
					{messages && <MessageBox Message={messages} />}
				</div>
			</div>

			<Form onSubmit={handleSubmit}>
				<Form.Group className="m-2">
					<InputGroup>
						<Form.Control
							as="textarea"
							required
							// value={text}
							// onChange={(e) => setText(e.target.value)}
							placeholder="Type your message..."
						/>
						<Button type="submit">Send</Button>
					</InputGroup>
				</Form.Group>
			</Form>
		</>
	);

	const handleContent = useSwitch({
		//! not good to show the loader for the message status.it will rerender when posting messages. 
		idle: <Loader />,
		pending: <Loader />,
		error: <error>{error}</error>,
		succeeded: <Interface />,
	});

	return handleContent(status);
};

export default ChatBody;
