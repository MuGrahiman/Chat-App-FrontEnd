import React, { useEffect, useState } from "react";
import CollapseWrapper from "./Collapse";
import { Button, Card, CloseButton, Collapse } from "react-bootstrap";
import CardComponent from "./Card";

const ChatProfile = ({ open, onClose }) => {
	const [modal, setModal] = useState(false);
	useEffect(() => {
		setModal(open ? true : false);
	}, [open]);
	return (
		<CollapseWrapper
			open={modal}
			dimension={"height"}>
			<div
				id="example-collapse-text"
				className="  bg-success text-dark ">
				<CardComponent
					flex={"col"}
					imgUrl={
						"https://w7.pngwing.com/pngs/522/207/png-transparent-profile-icon-computer-icons-business-management-social-media-service-people-icon-blue-company-people-thumbnail.png"
					}
					imgClass={"rounded-pill m-auto"}
					imgHeight={"100px"}
					imgWidth={"100px"}
					bodyClass={"m-auto text-center"}
					title={"Mujeeb"}
					subTitle={"Private"}
					bio={"Mern Stack Developer"}
					footerFun={() => <Button variant="danger">Block User</Button>}
					footerClass={"m-auto bg-transparent border-0"}
				/>
			</div>
		</CollapseWrapper>
	);
};

export default ChatProfile;
