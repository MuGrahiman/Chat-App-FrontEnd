import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Each from './Each';

const ListComponent = ({Contents ,Customize ,Class}) => {
  return (
		<ListGroup
			variant="flush"
			className={`${Class}`}>
			{Contents && (
				<Each
					of={Contents}
					render={(data) => (
						<ListGroup.Item
							action
							className=" border-0">
							{Customize(data)}
						</ListGroup.Item>
					)}
				/>
			)}
		</ListGroup>
	);
}

export default ListComponent