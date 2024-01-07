import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useContacts } from "../Contexts/ContactsProvider";
import { useConversations } from "../Contexts/ConversationsProvider";

const NewConversationModal = ({closeModal}) => {
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  const [selectedCotactIds, setSelectedCotactIds] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedCotactIds)
    closeModal();
  };
  const handleCheckBoxChange = (contactId) => {
    setSelectedCotactIds((prevSelectedCotactIds) => {
      if (prevSelectedCotactIds.includes(contactId))
        return prevSelectedCotactIds.filter((prevId) => contactId !== prevId);
      else return [...prevSelectedCotactIds, contactId];
    });
  };
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedCotactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckBoxChange(contact.id)}
              />
              {/* <Form.Control type="text" ref={idRef} required /> */}
            </Form.Group>
          ))}
          <Button type="submit">create </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
