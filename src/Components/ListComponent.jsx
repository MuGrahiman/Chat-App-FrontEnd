import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Each from './Each';

const ListComponent = ({Contents ,Customize ,Class}) => {
  return (
		<ListGroup
			variant="flush"
			className={`${Class}`}>
			<Each
				of={Contents}
				render={(data)=>Customize(data)}
			/>
		</ListGroup>
	);
}

export default ListComponent