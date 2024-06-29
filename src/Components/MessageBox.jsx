import React, { useCallback } from "react";
import { useSelector } from "react-redux";

const MessageBox = ({ Message }) => {
    
    const user = useSelector((state) => state.user.currentUser);
	const setRef = useCallback((node) => {
		node && node.scrollIntoView({ behavior: "smooth" });
	}, []);

	return Message.map((item, index) => (
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
					item.sender._id === user.id ? "bg-primary text-white" : "border"
				}`}>
				{item.text}
			</div>
			<div
				className={`text-muted small ${
					item.sender._id === user.id ? "text-right" : ""
				}`}>
				{item.sender._id === user.id ? "You" : item.sender.userName}
			</div>
		</div>
	));
};

export default MessageBox;
