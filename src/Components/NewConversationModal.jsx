import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
// import { useContacts } from "../Contexts/ContactsProvider";
// import { useConversations } from "../Contexts/ConversationsProvider";

const NewConversationModal = ({ closeModal }) => {
	// const { contacts } = useContacts();
	// const { createConversation } = useConversations();
	const [selectedCotactIds, setSelectedContactIds] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// createConversation(selectedContactIds)
		closeModal();
	};
	const handleCheckBoxChange = (contactId) => {
		setSelectedContactIds((prevSelectedContactIds) => {
			if (prevSelectedContactIds.includes(contactId))
				return prevSelectedContactIds.filter((prevId) => contactId !== prevId);
			else return [...prevSelectedContactIds, contactId];
		});
	};
	return (
		<>
			<Modal.Header closeButton>Create Conversation</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					{/* {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckBoxChange(contact.id)}
              />
            </Form.Group>
          ))} */}
					<Button type='submit'>create </Button>
				</Form>
			</Modal.Body>
		</>
	);
};

export default NewConversationModal;
