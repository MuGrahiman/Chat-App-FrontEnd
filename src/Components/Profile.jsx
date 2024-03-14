import React, { useEffect, useState } from "react";
import CardComponent from "./Card";
import Button from "react-bootstrap/esm/Button";
import {
	Accordion,
	Badge,
	Card,
	ListGroup,
	Nav,
	Tab,
	Tabs,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccordionComponent from "./AccordionComponent";
import TabsComponent from "./TabComponent";
import ListComponent from "./ListComponent";
import {
	checkConnection,
	createConnection,
	getUser,
	toggleFollowStatus,
} from "../Store";
import Swal from "sweetalert2";

const Profile = () => {
	const { userId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [activeKey, setActiveKey] = useState("Followers");
	const currentUser = useSelector((state) => state.user.currentUser);
	const userList = useSelector((state) => state.auth.authData);
	const followings = useSelector((state) => state.contacts.followingList);
	const isFollowing = followings?.some((f) => f._id === userId);
	const profile = useSelector((state) => state.profile);
	const {
		userDetails,
		followingList,
		followerList,
		groupList,
		channelList,
		subscribedList,
		blockedList,
	} = profile;
	const refreshPage = () => dispatch(getUser(userId));
	const reRoute = (chatId) => navigate(`/dashboard/chat/${chatId}`);
	const dispatcher = (func, ...args) => {
		dispatch(func(...args))
			.then((res) => {
				refreshPage();
			})
			.catch((error) => {
				console.error("Error occurred:", error);
			});
	};

	useEffect(() => {
		refreshPage();
	}, []);

	const fireMessage = () =>
		Swal.fire({
			title: "You are not connected yet!",
			text: "Would you like to make a new connection?",
			iconHtml:
				'<img src="https://media.tenor.com/qKGlaYl2DqMAAAAi/gif-de-sauda%C3%A7%C3%A3o.gif" style="width: 50px; height: 50px;">', // Using a custom icon
			showCancelButton: true,
			showCloseButton: true,
			confirmButtonText: "Connect",
			cancelButtonText: "Cancel",
			reverseButtons: true,
		}).then(
			(res) =>
				res.isConfirmed &&
				dispatch(createConnection(userId)).then((res) =>
					reRoute(res.payload.chatId)
				));
	/* user details */
	const footerFun = () => {
		dispatch(checkConnection(userId))
			.then((res) => {
				const { isConnected, chatId } = res?.payload;
				if (isConnected) reRoute(chatId);
				else fireMessage();
			})
			.catch((error) => {
				console.error("Error occurred:", error);
			});
	};

	const footerButtons = () =>
		userId !== currentUser.id ? (
			<div className="d-flex flex-column gap-2">
				<Button
					onClick={() => dispatcher(toggleFollowStatus, userId)}
					variant={!isFollowing ? "success" : "danger"}>
					{!isFollowing ? "follow" : "un follow"}
				</Button>
				<Button
					variant="primary"
					onClick={footerFun}>
					Message
				</Button>
			</div>
		) : (
			<Button
				variant="primary"
				onClick={""}>
				Edit
			</Button>
		);

	const UserProfile = () =>
		userDetails && (
			<CardComponent
				cardClass={"flex-md-col flex-row p-3 m-3"}
				imgUrl={userDetails?.profilePic}
				imgClass={"rounded-pill m-auto"}
				imgHeight={"100px"}
				imgWidth={"100px"}
				bodyClass={"text-md-start text-center"}
				title={userDetails?.userName}
				subTitle={userDetails?.firstName + userDetails?.lastName}
				bio={"Mern Stack Developer"}
				footerFun={footerButtons}
				footerClass={"m-auto bg-transparent border-0"}
			/>
		);

	/* Follower & Following List */
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
					footerFun={() =>
						currentUser.id !== item._id && (
							<Badge onClick={() => dispatch(toggleFollowStatus(item._id))}>
								{followings &&
								followings.some((following) => following._id === item._id)
									? "un follow"
									: "follow"}
							</Badge>
						)
					}
				/>
			</>
		) : null;

	const funComponent = (dataList) => (
		<AccordionComponent flush>
			{dataList && (
				<ListComponent
					variant="flush"
					Class="gap-1 p-2"
					Contents={dataList}
					Customize={render}
				/>
			)}
		</AccordionComponent>
	);

	const Items = [
		{
			EventKey: "Followers",
			ItemKey: () => (
				<p>
					Followers <Badge>{followerList && followerList.length}</Badge>
				</p>
			),
			Component: () => funComponent(followerList),
		},
		{
			EventKey: "Followings",
			ItemKey: () => (
				<p>
					Followings <Badge>{followingList && followingList.length}</Badge>
				</p>
			),
			Component: () => funComponent(followingList),
		},
	];

	const FollowerFollowingList = () => (
		<div
			className="m-3 border d-flex flex-column"
			style={{ maxHeight: "350px" }}>
			<TabsComponent
				fill
				justify
				activeKey={activeKey}
				setActiveKey={setActiveKey}
				Items={Items}
			/>
		</div>
	);

	/* subscribed channel */

	const renderSubscribedList = (item, index) =>
		item && (
			<CardComponent
				style={{ width: "200px" }}
				cardClass="h-100"
				imgUrl={item.profilePic}
				imgHeight={"50px"}
				imgWidth={"50px"}
				imgClass={"border-0 rounded-pill m-auto img-thumbnail"}
				bodyClass={"p-2 m-auto text-center"}
				title={item.userName}
				subTitle={item.firstName + " " + item.lastName}
				footerClass={"bg-transparent border-0 d-grid"}
				footerFun={() => (
					<Button
						className="btn btn-danger btn-small"
						onClick={() => dispatch(toggleFollowStatus(item._id))}>
						{followings &&
						followings.some((following) => following._id === item._id)
							? "unfollow"
							: "follow"}
					</Button>
				)}
			/>
		);

	const SubscribedList = () => (
		<div
			className="m-3 border "
			style={{ maxWidth: "62rem" }}>
			<AccordionComponent
				flush
				defaultKey
				title={"Subscribed Channels:"}>
				{subscribedList && (
					<ListComponent
						variant="flush"
						Class="gap-1 p-2 flex-row overflow-x-auto"
						Contents={subscribedList}
						Customize={renderSubscribedList}
					/>
				)}
			</AccordionComponent>
		</div>
	);

	/* channels owned */
	const renderChannelList = (item, index) =>
		item && (
			<CardComponent
				style={{ width: "200px" }}
				cardClass="h-100"
				imgUrl={item.profilePic}
				imgHeight={"50px"}
				imgWidth={"50px"}
				imgClass={"border-0 rounded-pill m-auto img-thumbnail"}
				bodyClass={"p-2 m-auto text-center"}
				title={item.userName}
				subTitle={item.firstName + " " + item.lastName}
				footerClass={"bg-transparent border-0 d-grid"}
				footerFun={() => (
					<Button
						className="btn btn-danger btn-small"
						onClick={() => dispatch(toggleFollowStatus(item._id))}>
						{followings &&
						followings.some((following) => following._id === item._id)
							? "unfollow"
							: "follow"}
					</Button>
				)}
			/>
		);

	const ChannelList = () => (
		<div
			className="m-3 border "
			style={{ maxWidth: "62rem" }}>
			<AccordionComponent
				flush
				defaultKey
				title={"Channels owned by the user:"}>
				{userList && (
					<ListComponent
						variant="flush"
						Class="gap-1 p-2 flex-row overflow-x-auto"
						Contents={channelList}
						Customize={renderChannelList}
					/>
				)}
			</AccordionComponent>
		</div>
	);

	/* group list */
	const renderGroupList = (item, index) =>
		item && (
			<CardComponent
				style={{ width: "200px" }}
				cardClass="h-100"
				imgUrl={item.profilePic}
				imgHeight={"50px"}
				imgWidth={"50px"}
				imgClass={"border-0 rounded-pill m-auto img-thumbnail"}
				bodyClass={"p-2 m-auto text-center"}
				title={item.userName}
				subTitle={item.firstName + " " + item.lastName}
				footerClass={"bg-transparent border-0 d-grid"}
				footerFun={() => (
					<Button
						className="btn btn-danger btn-small"
						onClick={() => dispatch(toggleFollowStatus(item._id))}>
						{followings &&
						followings.some((following) => following._id === item._id)
							? "unfollow"
							: "follow"}
					</Button>
				)}
			/>
		);

	const GroupList = () => (
		<div
			className="m-3 border "
			style={{ maxWidth: "62rem" }}>
			<AccordionComponent
				flush
				defaultKey
				title={"Matched Groups:"}>
				{/*Matched Groups or participating groups */}
				{userList && (
					<ListComponent
						variant="flush"
						Class="gap-1 p-2 flex-row overflow-x-auto"
						Contents={groupList}
						Customize={renderGroupList}
					/>
				)}
			</AccordionComponent>
		</div>
	);

	/* Blocked List*/
	const renderBlockedList = (item, index) =>
		item && (
			<CardComponent
				style={{ width: "200px" }}
				cardClass="h-100"
				imgUrl={item.profilePic}
				imgHeight={"50px"}
				imgWidth={"50px"}
				imgClass={"border-0 rounded-pill m-auto img-thumbnail"}
				bodyClass={"p-2 m-auto text-center"}
				title={item.userName}
				subTitle={item.firstName + " " + item.lastName}
				footerClass={"bg-transparent border-0 d-grid"}
				footerFun={() => (
					<Button
						className="btn btn-danger btn-small"
						onClick={() => dispatch(toggleFollowStatus(item._id))}>
						{followings &&
						followings.some((following) => following._id === item._id)
							? "unfollow"
							: "follow"}
					</Button>
				)}
			/>
		);
	const BlockedList = () => (
		<div
			className="m-3 border "
			style={{ maxWidth: "62rem" }}>
			<AccordionComponent
				flush
				defaultKey
				title={"Blocked List:"}>
				{blockedList && (
					<ListComponent
						variant="flush"
						Class="gap-1 p-2 flex-row overflow-x-auto"
						Contents={blockedList}
						Customize={renderBlockedList}
					/>
				)}
			</AccordionComponent>
		</div>
	);

	return (
		<div className="h-100 d-flex flex-column flex-grow-1 ">
			<div className="flex-grow-1 overflow-auto bg-light position-relative">
				<UserProfile />
				<FollowerFollowingList />
				<SubscribedList />
				<ChannelList />
				<GroupList />
				<BlockedList />
			</div>
		</div>
	);
};

export default Profile;
