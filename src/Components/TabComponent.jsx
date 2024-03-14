import React from "react";
import { Nav, Tab } from "react-bootstrap";
import Each from "./Each";

const TabsComponent = ({
	activeKey,
	setActiveKey,
	Items,
	justify,
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
						render={({ ItemKey, EventKey }) => (
							<Nav.Item key={EventKey}>
								<Nav.Link eventKey={EventKey}>
									<ItemKey />
								</Nav.Link>
							</Nav.Item>
						)}
					/>
				)}
			</Nav>

			<Tab.Content className="border-end overflow-auto flex-grow-1">
				{Items && (
					<Each
						of={Items}
						render={({EventKey, ItemKey, Component }) => (
							<Tab.Pane
								eventKey={EventKey}
								key={EventKey}
								>
								<Component
									activeKey={activeKey}
									setActiveKey={setActiveKey}
								/>
							</Tab.Pane>
						)}
					/>
				)}
			</Tab.Content>
		</Tab.Container>
	);
};

export default TabsComponent;
