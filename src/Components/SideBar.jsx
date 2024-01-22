import React, { useState } from "react";
import { Button, Modal, Nav, Tab } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConversationModal";
import useAuth from "../Hooks/useAuth";

const SideBar = ({ id }) => {
	const CONVERSATIONS_KEY = "conversations";
	const CONTACTS_KEY = "contacts";
	const [_, removeAuthentication] = useAuth();
	const [modalOpen, setModalOpen] = useState(false);
	const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
	const conversationOpen = activeKey === CONVERSATIONS_KEY;
	const closeModal = () => setModalOpen(false);
	return (
		<div
			className="d-flex flex-column"
			style={{ width: "250px" }}>
			<Tab.Container
				activeKey={activeKey}
				onSelect={setActiveKey}>
				<Nav
					variant="tabs"
					className="justify-content-center">
					<Nav.Item>
						<Nav.Link eventKey={CONVERSATIONS_KEY}> Conversation</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey={CONTACTS_KEY}> Contacts</Nav.Link>
					</Nav.Item>
				</Nav>
				<Tab.Content className="border-end overflow-auto flex-grow-1">
					<Tab.Pane eventKey={CONVERSATIONS_KEY}>
						<Conversations />
					</Tab.Pane>
					<Tab.Pane eventKey={CONTACTS_KEY}>
						<Contacts />
					</Tab.Pane>
				</Tab.Content>
				<div className="p-2 border small">
					Your Id: <span className="text-muted">'{id}'</span>
				</div>
				<Button
					className="rounded-0"
					onClick={() => setModalOpen(true)}>
					New {conversationOpen ? "Conversation" : "Contact"}
				</Button>
				<Button
					className="rounded-0 btn-danger"
					onClick={() => removeAuthentication(true)}>
					Log Out
				</Button>
			</Tab.Container>

			<Modal
				show={modalOpen}
				onHide={closeModal}>
				{conversationOpen ? (
					<NewConversationModal closeModal={closeModal} />
				) : (
					<NewContactModal closeModal={closeModal} />
				)}
			</Modal>
		</div>
	);
};

export default SideBar;
