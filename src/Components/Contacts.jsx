import React, { useEffect, useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { Badge, Form, InputGroup, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Each from "./Each";
import { toggleFollowStatus } from "../Store";

const Contacts = ({ setModal }) => {
	const dispatch = useDispatch();
	const authData = useSelector((state) => state.auth.authData);
	const followings = useSelector((state) => state.contacts.followings);
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		setUserList(authData);
	}, [authData]);
	const handleSearch = (searchText) => {
		const text = searchText.trim().toLowerCase();
		const filteredData = authData.filter(
			(data) =>
				data.userName.trim().toLowerCase().includes(text) ||
				data.firstName.trim().toLowerCase().includes(text) ||
				data.lastName.trim().toLowerCase().includes(text)
		);
		setUserList(filteredData);
	};
	
	return (
		<>
			<ListGroup
				variant="flush"
				className="gap-1 p-2">
				<InputGroup className="mb-3 rounded-pill border">
					<Form.Control
						className="border-0 rounded-end rounded-pill"
						placeholder="Search name ..."
						onChange={(e) => handleSearch(e.target.value)}
					/>
					<InputGroup.Text className="border-0 bg-white rounded-start rounded-pill">
						<MdPersonSearch />
					</InputGroup.Text>
				</InputGroup>

				{userList && userList[0] && (
					<Each
						of={userList}
						render={(item, index) => (
							<ListGroup.Item
								action
								// active={conversations.selected}
								className="d-flex justify-content-between align-items-start border rounded ">
								<div
									className="ms-2 me-auto"
									onClick={() => setModal(item?.chat?._id)}>
									<div className="fw-bold">{item?.userName}</div>
									{item.firstName + " " + item.lastName}
								</div>
								<Badge onClick={() => dispatch(toggleFollowStatus(item._id))}>
									{followings &&
									followings.some((following) => following._id === item._id)
										? "un follow"
										: "follow"}
								</Badge>
							</ListGroup.Item>
						)}
					/>
				)}
			</ListGroup>
		</>
	);
};

export default Contacts;
