import React from 'react'
import { Offcanvas } from 'react-bootstrap';

const ProfileOffcanvas = () => {
  return (
		<div>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Offcanvas</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				Some text as placeholder. In real life you can have the elements you
				have chosen. Like, text, images, lists, etc.
			</Offcanvas.Body>
		</div>
	);
}

export default ProfileOffcanvas