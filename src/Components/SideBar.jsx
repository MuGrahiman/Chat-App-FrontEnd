import React, { useState } from "react";
import { Button, Form, InputGroup, Modal, Nav, Tab } from "react-bootstrap";

import useAuth from "../Hooks/useAuth";
import { useSelector } from "react-redux";
import Each from "./Each";

const SideBar = ({ openChat, activeKey, setActiveKey, Items }) => {
	const user = useSelector((state) => state.user.currentUser);
	const [_, removeAuthentication] = useAuth();
	const [modalOpen, setModalOpen] = useState(false);
	const closeModal = () => setModalOpen(false);
	return (
		<div
			className="d-flex flex-column h-100"
			style={{ width: "350px" }}>
			<Tab.Container
				activeKey={activeKey}
				onSelect={setActiveKey}>
				<Nav
					variant="tabs"
					className="justify-content-center">
					<Each
						of={Items}
						render={({ ItemKey }, index) => (
							<Nav.Item>
								<Nav.Link eventKey={ItemKey}> {ItemKey}</Nav.Link>
							</Nav.Item>
						)}
					/>
				</Nav>

				<Tab.Content className="border-end overflow-auto flex-grow-1">
					{/* <InputGroup className="mb-3 rounded-pill border">
						<Form.Control
							className="border-0 rounded-end rounded-pill"
							placeholder="Search name ..."
							// onChange={(e) => handleSearch(e.target.value)}
						/>
						<InputGroup.Text className="border-0 bg-white rounded-start rounded-pill">
							<MdPersonSearch />
						</InputGroup.Text>
					</InputGroup> */}

					<Each
						of={Items}
						render={({ ItemKey, Component }, index) => {
							return (
								<Tab.Pane eventKey={ItemKey}>
									<Component openChat={openChat} />
								</Tab.Pane>
							);
						}}
					/>
				</Tab.Content>
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
			</Tab.Container>

			{/* <Modal
				show={modalOpen}
				onHide={closeModal}> */}
				<Each
					of={Items}
					render={({ ItemKey, ModalComponent }) =>
						ItemKey === activeKey && (
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
