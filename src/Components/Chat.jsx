import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	getChat,
	getAllMessages,
	resetMessage,
	getPrivateChat,
	getGroupChat,
	getChannelChat,
	resetChat,
} from "../Store";
import Loader from "./Loader";
import ChatInterface from "./ChatInterface";
import useSwitch from "../Hooks/useSwitch";

const Chat = () => {
	const { chatId, chatType } = useParams();

	const { chatDetails, status, error } = useSelector((state) => state.chat);
	// const { _, status, error } = useSelector((state) => state[chatType]);

	const dispatch = useDispatch();
	const alertFun = ({ chatType }) =>
		alert(`There is no chatType with this ${chatType} name`);

	useEffect(() => {
		dispatch(resetMessage()); // Reset Message state before fetching new Messages
		dispatch(resetChat()); // Reset chat state before fetching new Chat
		dispatch(getChat({ chatType, chatId }));
	}, []);

	const handleContent = useSwitch({
		idle: <Loader />,
		pending: <Loader />,
		error: <error>{error}</error>,
		succeeded: <ChatInterface chat={chatDetails} />,
		default: alertFun,
	});


	return handleContent(status);
};
export default Chat;
