import React, { useState } from "react";
import { Button, Nav, Tab } from "react-bootstrap";

import useAuth from "../Hooks/useAuth";
import { useSelector } from "react-redux";
import Each from "./Each";
import TabsComponent from "./TabComponent";

const SideBar = ({ openChat, activeKey, setActiveKey, Items }) => {
	const user = useSelector((state) => state.user.currentUser);
	const [_, removeAuthentication] = useAuth();
	const [modalOpen, setModalOpen] = useState(false);
	const closeModal = () => setModalOpen(false);
	return (
		<div
			className="d-flex flex-column h-100"
			style={{ width: "350px" }}>

			<TabsComponent
			fill
			justify
				activeKey={activeKey}
				setActiveKey={setActiveKey}
				Items={Items}
			/>
			<div className="p-2 border small">
				Your Id: <span className="text-muted">'{user.id}'</span>
			</div>
			<Button
				className="rounded-0"
				onClick={() => setModalOpen(true)}>
				New {activeKey}
			</Button>
			<Button
				className="rounded-0 btn-danger"
				onClick={() => removeAuthentication(true)}>
				Log Out
			</Button>

			{/* <Modal
				show={modalOpen}
				onHide={closeModal}> */}
			<Each
				of={Items}
				render={({ EventKey, ModalComponent }) =>
					EventKey === activeKey && (
						<ModalComponent
							openModal={modalOpen}
							closeModal={closeModal}
						/>
					)
				}
			/>
			{/* </Modal> */}
		</div>
	);
};

export default SideBar;
