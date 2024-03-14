import React, { useEffect, useState } from "react";
import { Form, InputGroup, ListGroup, Badge, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MdPersonSearch } from "react-icons/md";
import { toggleFollowStatus } from "../Store";
import ModalWrapper from "./Modal";
import ListComponent from "./ListComponent";
import CardComponent from "./Card";
import { Link } from "react-router-dom";

const NewConnectionModal = ({ closeModal, openModal }) => {
	const dispatch = useDispatch();
	const authData = useSelector((state) => state.auth.authData);
	const followings = useSelector((state) => state.contacts.followingList);
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		const filteredUsers =
			authData &&
			authData.filter((user) =>
				followings
					? !followings.some((following) => following._id === user._id)
					: user
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

	const render = (item) => {
		const isFollowing = followings?.some((f) => f._id === item._id);
		return item ? (
			<CardComponent
				cardClass={"flex-row "}
				imgUrl={item?.profilePic}
				imgClass={"border-0 rounded-pill  m-auto  img-thumbnail"}
				imgHeight={"50px"}
				imgWidth={"50px"}
				bodyClass={"p-2"}
				title={item?.userName}
				subTitle={item?.firstName + " " + item?.lastName}
				footerClass={"m-auto bg-transparent border-0 "}
				footerFun={() => (
					<div className="d-grid gap-2">
							<Badge
								className={`w-100 bg-${isFollowing ? "danger" : "success"}`}
								onClick={() => dispatch(toggleFollowStatus(item._id))}>
								{isFollowing ? "un follow" : "follow"}
							</Badge>

						<Link to={`profile/${item._id}`}>
							<Badge
								className="w-100"
								onClick={closeModal}>
								View
							</Badge>
						</Link>
					</div>
				)}
			/>
		) : null;
	};

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
