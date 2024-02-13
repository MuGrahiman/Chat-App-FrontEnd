import React from 'react'
import { Modal } from 'react-bootstrap';

const ModalWrapper = ({ openModal,closeModal, children }) => {
	return (
		<Modal
			show={openModal}
			onHide={closeModal}>
			{children}
		</Modal>
	);
};

export default ModalWrapper