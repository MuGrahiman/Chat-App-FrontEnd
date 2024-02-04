import React from "react";
import CollapseWrapper from "../Components/Collapse";
import { CloseButton} from "react-bootstrap";

const ChatProfile = ({ open, onClose }) => {
	return (
		<CollapseWrapper
			open={open}
			// dimension={"width"}
		>
			<div className="w-100 d-flex">
				<CloseButton
					aria-label="Hide"
					onClick={onClose}
				/>
				<div className="mx-auto">
					<img
						src=""
						alt=""
					/>
					<h4>userName</h4>
					<h6>First Name + Last Name</h6>
					<p>Bio</p>
				</div>
			</div>
		</CollapseWrapper>
	);
};

export default ChatProfile;
