import React from 'react'
import { Form, InputGroup, ListGroup } from 'react-bootstrap';
import { MdPersonSearch } from "react-icons/md";

const Groups = () => {
return (
	<ListGroup
		variant="flush"
		className="gap-1 p-2">
		<InputGroup className="mb-3 rounded-pill border">
			<Form.Control
				className="border-0 rounded-end rounded-pill"
				placeholder="Search name ..."
				// onChange={(e) => handleSearch(e.target.value)}
			/>
			<InputGroup.Text className="border-0 bg-white rounded-start rounded-pill">
				<MdPersonSearch />
			</InputGroup.Text>
		</InputGroup>

		{/* {chatList && (
			<Each
				of={chatList}
				render={(item, index) => {
					const recipient =
						item.chat &&
						item?.chat?.participants?.filter((r) => r._id !== user.id);
					console.log(recipient);
					return (
						<ListGroup.Item
							action
							onClick={() => setModal(recipient?.map((r) => r._id))}
							// active={conversations.selected}
							className="d-flex justify-content-between align-items-start border rounded ">
							<Form.Check
								// inline
								// label="1"
								className="m-auto"
								name="group1"
								type={"checkbox"}
								// id={`inline-${type}-1`}
							/>
							<div className="ms-2 me-auto">
								<div className="fw-bold">
									{recipient?.map((r) => r.userName).join(" ")}
								</div>
								Cras justo odio
							</div>
							<Badge
								bg="primary"
								pill>
								14
							</Badge>
						</ListGroup.Item>
					);
				}}
			/>
		)} */}

	</ListGroup>
);
}

export default Groups