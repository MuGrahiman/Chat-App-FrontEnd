import React, { useEffect } from 'react'
import CardComponent from "./Card";
import { Button, Card, CloseButton, Collapse } from "react-bootstrap";
import { useDispatch } from 'react-redux';

const PrivateProfile = () => {
	const dispatch = useDispatch();

    	useEffect(() => {
				// dispatch(resetMessage()); // Reset chat state before fetching new data
				// dispatch(getChat({ chatType, chatId }));
			}, []);

  return (
		<CardComponent
			cardClass={"flex-md-row flex-col p-3 m-3"}
			imgUrl={
				"https://w7.pngwing.com/pngs/522/207/png-transparent-profile-icon-computer-icons-business-management-social-media-service-people-icon-blue-company-people-thumbnail.png"
			}
			imgClass={"rounded-pill m-auto"}
			imgHeight={"100px"}
			imgWidth={"100px"}
			bodyClass={" text-center text-md-start"}
			title={"Mujeeb"}
			subTitle={"Private"}
			bio={"Mern Stack Developer"}
			footerClass={" bg-transparent border-0"}
			footerFun={() => (
				<div className="d-grid gap-2">
					<Button
						variant="outline-primary"
						// onClick={() => navigate(`profile/${user._id}`)}
					>
						Profile
					</Button>
					<Button variant="outline-danger">Block</Button>
					<Button variant="outline-danger">Delete</Button>
				</div>
			)}
		/>
	);
}

export default PrivateProfile