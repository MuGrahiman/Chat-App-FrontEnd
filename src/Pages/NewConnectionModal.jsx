import React, { useEffect, useState } from "react";
import { Form, InputGroup, ListGroup, Badge, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MdPersonSearch } from "react-icons/md";
import { toggleFollowStatus } from "../Store";
import ModalWrapper from "../Components/Modal";
import ListComponent from "../Components/ListComponent";
import CardComponent from "../Components/Card";

const NewConnectionModal = ({ closeModal, openModal }) => {
	const dispatch = useDispatch();
	const authData = useSelector((state) => state.auth.authData);
	const followings = useSelector((state) => state.connection.followingList);
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		const filteredUsers = authData.filter(
			(user) => !followings.some((following) => following._id === user._id)
		);
		setUserList(filteredUsers);
	}, [authData, followings]);
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

	const render = (item, index) =>
		item ? (
			<>
				<ListGroup.Item
					action
					// active={conversations.selected}
					className=" border-0  ">
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
							<Badge onClick={() => dispatch(toggleFollowStatus(item._id))}>
								{followings &&
								followings.some((following) => following._id === item._id)
									? "un follow"
									: "follow"}
							</Badge>
						)}
					/>
				</ListGroup.Item>
			</>
		) : null;

	return (
		<ModalWrapper
			closeModal={closeModal}
			openModal={openModal}>
			<Modal.Header closeButton>Create New Connections</Modal.Header>
			<Modal.Body>
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

				<ListComponent
					variant="flush"
					Class="gap-1 p-2"
					Contents={userList}
					Customize={render}
				/>
			</Modal.Body>
		</ModalWrapper>
	);
};

export default NewConnectionModal;
