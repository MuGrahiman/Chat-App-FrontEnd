import React from "react";
import {  Collapse } from "react-bootstrap";

const CollapseWrapper = ({ open, dimension ,children,onClose}) => {
	return (
		
		<Collapse
			in={open}
			dimension={dimension}>
			{/* <div
				id="example-collapse-text"
				style={{ width: "100%", height: "100dvh" }}
				className="position-absolute top-0  bg-light text-dark">
			 */}
				{children}
			{/* </div> */}
		</Collapse>
	);
};

export default CollapseWrapper;
