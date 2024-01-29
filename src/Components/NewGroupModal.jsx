import React, { useRef, useEffect, useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import {
	Form,
	InputGroup,
	ListGroup,
	Button,
	Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Each from "./Each";

const NewGroupModal = ({ closeModal }) => {
    const dispatch = useDispatch();
		const authData = useSelector((state) => state.auth.authData);
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

	const idRef = useRef();
	const nameRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		closeModal();
	};
	return (
		<>
			<Modal.Header closeButton>Create Group</Modal.Header>
			<Modal.Body
			// className="h-50"
			>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter your group name ..."
							ref={nameRef}
							required
						/>
					</Form.Group>
					<Form.Group className=" m-2">
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
					</Form.Group>
					<Form.Group>
						<ListGroup
							variant="flush"
							style={{ height: "calc(100vh - 65vh)" }}
							className="gap-1 p-2 overflow-auto ">
							{userList && userList[0] && (
								<Each
									of={userList}
									render={(item, index) => {
										return (
											<>
												
												<ListGroup.Item
													action
													// active={conversations.selected}
													className="d-flex justify-content-between align-items-start border rounded bg-light">
													<div
														className="ms-2 me-auto"
														// onClick={() => setModal(item?._id)}
													>
														<div className="fw-bold">{item?.userName}</div>
														{item.firstName + " " + item.lastName}
													</div>
													<Form.Check
														// custom
														inline
														// label="1"
														color="green"
														// bsSwitchPrefix="bg-success"
														bsPrefix="bg-success"
														className="m-auto text-success border-0"
														type={"checkbox"}
														// id={`inline-${type}-1`}
													/>
													{/* <Badge
														onClick={() =>
															dispatch(toggleFollowStatus(item._id))
														}>
														{followings &&
														followings.some(
															(following) => following._id === item._id
														)
															? "un follow"
															: "follow"}
													</Badge> */}
												</ListGroup.Item>
											</>
										);
									}}
								/>
							)}
						</ListGroup>
					</Form.Group>
					<Form.Group className="d-grid p-2 m-2">
						<Button type="submit">create </Button>
					</Form.Group>
				</Form>
			</Modal.Body>
		</>
	);
};

export default NewGroupModal;
