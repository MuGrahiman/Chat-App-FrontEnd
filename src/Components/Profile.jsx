import React, { useState } from "react";
import CardComponent from "./Card";
import Button from "react-bootstrap/esm/Button";
import { Accordion, Badge, Card, ListGroup, Nav, Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccordionComponent from "./AccordionComponent";
import TabsComponent from "./TabComponent";
import ListComponent from './ListComponent';
import { toggleFollowStatus } from "../Store";


const Profile = () => {
	const { userId } = useParams();
	const [followed, setFollowed] = useState(false);
	const [activeKey, setActiveKey] = useState('Followers');
	const currentUser = useSelector((state) => state.user.currentUser);
	const followings = useSelector((state) => state.contacts.followingList);
	const dispatch = useDispatch();
	const userList = useSelector((state) => state.auth.authData);

	const footerButtons = () =>
		userId !== currentUser.id ? (
			<div className="d-flex flex-column gap-2">
				<Button
					onClick={() => setFollowed(!followed)}
					variant={!followed ? "success" : "danger"}>
					{!followed ? "follow" : "un follow"}
				</Button>
				<Button variant="primary">Message</Button>
			</div>
		) : (
			<Button
				variant="primary"
				onClick={""}>
				Edit
			</Button>
		);
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
							<Badge onClick={() => dispatch(toggleFollowStatus(item._id))}>
								{followings &&
								followings.some((following) => following._id === item._id)
									? "un follow"
									: "follow"}
							</Badge>
						)}
					/> 
			</>
		) : null;
		
		const renderCol = (item, index) => (
  item && (
          <CardComponent
		  style={{width:'200px'}}
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
                onClick={() => dispatch(toggleFollowStatus(item._id))}
              >
                {followings &&
                followings.some((following) => following._id === item._id)
                  ? "unfollow"
                  : "follow"}
              </Button>
            )}
          />
  )
);

	const funComponent = (userList) => (
		<AccordionComponent flush >
			{userList && (
				<ListComponent
					variant="flush"
					Class="gap-1 p-2"
					Contents={userList}
					Customize={render}
				/>
			)}
		</AccordionComponent>
	);

	const Items = [
		{
			ItemKey: "Followers",
			Component: () => funComponent(userList),
		},
		{
			ItemKey: "Followings",
			Component: () => funComponent(userList),
		},
	];

	return (
		<div className="h-100 d-flex flex-column flex-grow-1 ">
			<div className="flex-grow-1 overflow-auto bg-light position-relative">
				<CardComponent
					cardClass={"flex-md-col flex-row p-3 m-3"}
					imgUrl={
						"https://w7.pngwing.com/pngs/522/207/png-transparent-profile-icon-computer-icons-business-management-social-media-service-people-icon-blue-company-people-thumbnail.png"
					}
					imgClass={"rounded-pill m-auto"}
					imgHeight={"100px"}
					imgWidth={"100px"}
					bodyClass={"text-md-start text-center"}
					title={"Mujeeb"}
					subTitle={"Private"}
					bio={"Mern Stack Developer"}
					footerFun={footerButtons}
					footerClass={"m-auto bg-transparent border-0"}
				/>
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
				{/* subscribed channel */}
				<div
					className="m-3 border "
					style={{ maxWidth: "62rem" }}>
					<AccordionComponent
						flush
						defaultKey
						title={"Subscribed Channels:"}>
						{userList && (
							<ListComponent
								variant="flush"
								Class="gap-1 p-2 flex-row overflow-x-auto"
								Contents={[...userList, ...userList]}
								Customize={renderCol}
							/>
						)}
					</AccordionComponent>
				</div>
				{/* channels owned */}
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
								Contents={[...userList, ...userList]}
								Customize={renderCol}
							/>
						)}
					</AccordionComponent>
				</div>
				{/* subscribed channel */}
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
								Contents={[...userList, ...userList]}
								Customize={renderCol}
							/>
						)}
					</AccordionComponent>
				</div>
				{/* Blocked List*/}
				<div
					className="m-3 border "
					style={{ maxWidth: "62rem" }}>
					<AccordionComponent
						flush
						defaultKey
						title={"Blocked List:"}>
						{userList && (
							<ListComponent
								variant="flush"
								Class="gap-1 p-2 flex-row overflow-x-auto"
								Contents={[...userList, ...userList]}
								Customize={renderCol}
							/>
						)}
					</AccordionComponent>
				</div>

				<div
					className="m-3 border "
					style={{ maxWidth: "62rem" }}>
					<AccordionComponent
						flush
						defaultKey
						title={"check List:"}>
						{userList && (
							<ListComponent
								variant="flush"
								Class="gap-1 p-2 flex-row overflow-x-auto"
								Contents={[]}
								Customize={renderCol}
							/>
						)}
					</AccordionComponent>
				</div>
			</div>
		</div>
	);
};

export default Profile;
















