import Accordion from "react-bootstrap/Accordion";
import React, { Children } from "react";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Card } from "react-bootstrap";


const AccordionComponent = ({custom,eventKey,title, defaultKey,flush,children,...rest}) => {

  return (
		<Accordion
			defaultActiveKey={defaultKey}
			flush={flush}>
			<Accordion.Item eventKey={eventKey}>
				<Accordion.Header>{title}</Accordion.Header>
				<Accordion.Body>{children}</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}



export default AccordionComponent;

const CustomAccordion = ({ eventKey, body, CustomToggle }) => {
	 const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );
	return (
		<Card>
			<Card.Header>
				<CustomToggle
					onToggle={decoratedOnClick}
					eventKey={eventKey}/>
			</Card.Header>
			<Accordion.Collapse eventKey={eventKey}>
				<Card.Body>{Children}</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};
const DefaultAccordion = ({ eventKey, title, body }) => {
	return (
		<Accordion.Item eventKey={eventKey}>
			<Accordion.Header>{title}</Accordion.Header>
			<Accordion.Body>{Children}</Accordion.Body>
		</Accordion.Item>
	);
};