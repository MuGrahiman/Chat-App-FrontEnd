import React from "react";
import Card from "./Card";
import Each from "./Each";
import { useSelector } from "react-redux";

const Blog = () => {
	const authData = useSelector((state) => state.auth.authData);

	return (
		<div className="d-flex flex-column flex-grow-1">
			<div className=" flex-grow-1 overflow-auto">
				<div className=" d-flex flex-column align-items-start justify-content-end p-3">
					<h1>Blog</h1>
					{authData && authData[0] && (
						<Each
							of={authData}
							render={(item, index) => <Card {...item} />}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Blog;
