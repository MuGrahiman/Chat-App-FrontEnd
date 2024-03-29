import React, { useEffect, useState } from "react";
import { MdPersonSearch } from "react-icons/md";
import { Badge, Form, InputGroup, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollowStatus } from "../Store";
import ListComponent from "./ListComponent";
import CardComponent from './Card';
import { Link } from 'react-router-dom';

const ConnectionList = ({ openChat }) => {
	const dispatch = useDispatch();
	const authData = useSelector((state) => state.auth.authData);
	const followings = useSelector((state) => state.contacts.followingList);
	const [userList, setUserList] = useState([]);

	useEffect(() => {
		if (authData && followings) {
			const filteredUsers = authData.filter((user) =>
				followings.some((following) => following._id === user._id)
			);
			setUserList(filteredUsers);
		}
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
	const RenderItems = (item) => { 
		return item ? (
			<Link to={`profile/${item._id}`}>
		
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
							<Badge onClick={() => dispatch(toggleFollowStatus(item._id))}>
								{followings &&
								followings.some((following) => following._id === item._id)
									? "un follow"
									: "follow"}
							</Badge>
						)}
					/>
			</Link>
		) : null;
	};	
	return (
		<>
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
				Class={"gap-1 p-2"}
				Contents={userList}
				Customize={RenderItems}
			/>
		
		</>
	);

};

export default ConnectionList;

