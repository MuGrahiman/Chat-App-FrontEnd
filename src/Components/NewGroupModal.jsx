import React, { useRef, useEffect, useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { Form, InputGroup, ListGroup, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Each from "./Each";
import { createGroup } from "../Store";

const NewGroupModal = ({ closeModal }) => {
	const dispatch = useDispatch();
	const nameRef = useRef();
	const authData = useSelector((state) => state.auth.authData);
	const [userList, setUserList] = useState([]);
	const [selectedIds, setSelectedIds] = useState([]);

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
	const handleUserSelection = (id) => {
		console.log(id);
		console.log(selectedIds.includes(id));
		if (selectedIds.includes(id)) {
			const filterIds = selectedIds.filter((selectedId) => selectedId !== id);
			setSelectedIds([...filterIds]);
		} else setSelectedIds((prev) => [...prev, id]);
	};
	const handleSubmit = (e) => {
		e.preventDefault(); 
		const name = nameRef.current.value
		console.log(name)
		if (!name)alert('Enter the group name ');
		if(selectedIds.length === 0)alert("Please select any user");
		dispatch(createGroup({name,ids:selectedIds}))
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
													<div className="ms-2 me-auto">
														<div className="fw-bold">{item?.userName}</div>
														{item.firstName + " " + item.lastName}
													</div>
													<Form.Check
														onClick={() => handleUserSelection(item._id)}
														className="m-auto "
														type={"checkbox"}
													/>
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
