import React, { useRef, useEffect, useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { Form, InputGroup, ListGroup, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "../Store";
import ModalWrapper from "./Modal";
import ListComponent from "./ListComponent";
import CardComponent from "./Card";

const NewGroupModal = ({ closeModal, openModal }) => {
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
		const name = nameRef.current.value;
		console.log(name);
		if (!name) alert("Enter the group name ");
		if (selectedIds.length === 0) alert("Please select any user");
		dispatch(createGroup({ name, ids: selectedIds }));
		closeModal();
	};
	const render = (item, index) =>
		item ? (
			<>
			
					<CardComponent
						cardClass={"flex-row"}
						imgUrl={item?.profilePic}
						imgHeight={"50px"}
						imgWidth={"50px"}
						imgClass={"border-0 rounded-pill  m-auto  img-thumbnail"}
						bodyClass={"p-2"}
						title={item?.userName}
						subTitle={item.firstName + " " + item.lastName}
						footerClass={"bg-transparent m-auto border-0"}
						footerFun={() => (
							<Form.Check
								onClick={() => handleUserSelection(item._id)}
								className="m-auto "
								type={"checkbox"}
							/>
						)}
					/>
			</>
		) : null;

	return (
		<ModalWrapper
			closeModal={closeModal}
			openModal={openModal}>
			<Modal.Header closeButton>Create Group</Modal.Header>
			<Modal.Body>
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
						<div
							style={{ height: "calc(100vh - 65vh)" }}
							className="overflow-auto">
							<ListComponent
								Class="gap-1 p-2  "
								Contents={userList}
								Customize={render}
							/>
						</div>
					</Form.Group>
					<Form.Group className="d-grid p-2 m-2">
						<Button type="submit">create </Button>
					</Form.Group>
				</Form>
			</Modal.Body>
		</ModalWrapper>
	);
};

export default NewGroupModal;
