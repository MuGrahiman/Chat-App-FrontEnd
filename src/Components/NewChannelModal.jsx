import React, { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createChannel } from "../Store";

const NewChannelModal = ({ closeModal }) => {
	const dispatch = useDispatch();
	const idRef = useRef();
	const nameRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = nameRef.current.value.trim();
		console.log(name);
		if (!name) return alert("Enter your channel name");
		dispatch(createChannel({ name }));
		closeModal();
	};
	return (
		<>
			<Modal.Header closeButton>Create New Channel</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Id</Form.Label>
						<Form.Control
							type="text"
							ref={idRef}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter the name of your channel ..."
							ref={nameRef}
							required
						/>
					</Form.Group>
					<Button
						type="submit"
						className="mt-2">
						create
					</Button>
				</Form>
			</Modal.Body>
		</>
	);
};

export default NewChannelModal;
