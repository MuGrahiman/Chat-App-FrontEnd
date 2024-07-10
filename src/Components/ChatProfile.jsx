import React, { useEffect, useState } from "react";
import CollapseWrapper from "./Collapse";
import { useNavigate } from "react-router-dom";
import PrivateProfile from "./PrivateProfile";
import GroupProfile from "./GroupProfile";
import ChannelProfile from "./ChannelProfile";
import useSwitch from "../Hooks/useSwitch";

const ChatProfile = ({ open, onClose, type }) => {
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();
	console.warn(open);
	// alert(open);
	useEffect(() => {
		setModal(open ? true : false);
	}, [open]);
	const handleSwitch = useSwitch({
		Private: PrivateProfile,
		Group: GroupProfile,
		Channel: ChannelProfile,
		default: () => <div>Unexpected chat type</div>,
	});

	const Profile = handleSwitch(type);

	return (
		<div className="flex-grow-1 overflow-auto bg-light position-relative">
			<CollapseWrapper
				open={modal}
				dimension={"height"}>
				<div id="example-collapse-text">
					<Profile /> 
				</div>
			</CollapseWrapper>
		</div>
	);
};

export default ChatProfile;
