import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Each from "./Each";

const TabsComponent = ({
	activeKey,
	setActiveKey,
	Items,
	justify,
	eventKey,
	fill,
}) => {
	return (
		<Tab.Container
			activeKey={activeKey}
			onSelect={setActiveKey}>
			<Nav 
				justify={justify}
				fill={fill}
				variant="tabs">
				{Items && (
					<Each
						of={Items}
						render={({ ItemKey }) => (
							<Nav.Item key={ItemKey}>
								<Nav.Link eventKey={ItemKey}>{ItemKey}</Nav.Link>
							</Nav.Item>
						)}
					/>
				)}
			</Nav>

			<Tab.Content className="border-end overflow-auto flex-grow-1">
				{Items && (
					<Each
						of={Items}
						render={({ ItemKey, Component }) => (
							<Tab.Pane
								eventKey={ItemKey}
								key={ItemKey}>
								<Component />
							</Tab.Pane>
						)}
					/>
				)}
			</Tab.Content>
		</Tab.Container>
	);
};

export default TabsComponent;
