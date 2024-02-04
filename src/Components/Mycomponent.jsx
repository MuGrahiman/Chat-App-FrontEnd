import { useState } from "react";
import { Container, Row, Col, Offcanvas, Button, Fade } from "react-bootstrap";
import "../App.css";
// import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.1.3";

import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

const MyComponent = () => {
	const [open, setOpen] = useState(false);

	return (
		<div class="container-fluid">
			<div class="row">
				<div class="col-2 bg-light">Menu</div>
				<div
					id="main"
					class="col-10">
					<div class="d-flex flex-column vh-100">
						<div class="p-4 bg-light">Top menu</div>
						<div
							class="p-4 position-relative flex-fill"
							id="content">
							{/* <Fade in={open}>
							<div id="example-fade-text" className="offcanva">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. Nihil anim keffiyeh
								helvetica, craft beer labore wes anderson cred nesciunt sapiente
								ea proident.
							</div>
						</Fade> */}
							<Collapse
								in={open}
								dimension="width">
								<div
									id="example-collapse-text"
									className="position-absolute">
									<Card
										body
										style={{ width: "400px" }}>
										Anim pariatur cliche reprehenderit, enim eiusmod high life
										accusamus terry richardson ad squid. Nihil anim keffiyeh
										helvetica, craft beer labore wes anderson cred nesciunt
										sapiente ea proident.
									</Card>
								</div>
							</Collapse>
							<p>Content</p>
							<div className="float-end">sutfjhgfg</div>
							<Button
								onClick={() => setOpen(!open)}
								aria-controls="example-collapse-text"
								aria-expanded={open}>
								click
							</Button>
						</div>

						<div class="p-4 bg-light">Footer menu</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyComponent;
