// useChatData.js
import { useDispatch, useSelector } from "react-redux";
import {
	resetMessage,
	getPrivateChat,
	getGroupChat,
	getChannelChat,
} from "../Store";

const useFetchingChat = (chatType, chatId) => {
	const dispatch = useDispatch();
	const { chat, status, error } = useSelector((state) => state.chat);

	const fetchChat = () => {
		dispatch(resetMessage());
		let dispatchFun;
		switch (chatType) {
			case "private":
				dispatchFun = getPrivateChat;
				break;
			case "group":
				dispatchFun = getGroupChat;
				break;
			case "channel":
				dispatchFun = getChannelChat;
				break;
			default:
				dispatchFun = () =>
					alert(`There is no chatType with this ${chatType} name`);
		}

		dispatch(dispatchFun({ chatType, chatId }));
	};

	return { fetchChat,status,error,chat };
};

export default useFetchingChat;
