import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const ProfileAccordion = ({ followers, following }) => {
	const [activeAccordion, setActiveAccordion] = useState(null); 

	const handleAccordionClick = (accordion) => {
		setActiveAccordion(accordion === activeAccordion ? null : accordion);
	};

	return (
		<Accordion>
			<Card>
				<Card.Header>
					<Accordion.Toggle
						as={Button}
						variant="link"
						eventKey="followers"
						onClick={() => handleAccordionClick("followers")}>
						Followers
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="followers">
					<Card.Body>
						{/* {followers.map((follower) => (
							<div key={follower.id}>{follower.name}</div>
						))} */}
					</Card.Body>
				</Accordion.Collapse>
			</Card>
			<Card>
				<Card.Header>
					<Accordion.Toggle
						as={Button}
						variant="link"
						eventKey="following"
						onClick={() => handleAccordionClick("following")}>
						Following
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="following">
					<Card.Body>
						{/* {following.map((followed) => (
							<div key={followed.id}>{followed.name}</div>
						))} */}
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default ProfileAccordion;
