import React from "react";
import { Collapse } from "react-bootstrap";

const CollapseWrapper = ({ open, dimension, children, onClose }) => {
	return (
		<Collapse
			in={open}
			dimension={dimension}>
			{children}
		</Collapse>
	);
};

export default CollapseWrapper;
