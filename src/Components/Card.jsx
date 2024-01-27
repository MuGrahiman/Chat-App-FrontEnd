import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollowStatus } from "../Store";

function CardComponent({ _id, userName, profilePic, firstName, lastName }) {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.currentUser);
	const followings = useSelector((state) => state.contacts.followings);

	console.log(
		followings && followings.some((following) => following._id === user.id)
			
	);
	console.log(_id);
	return (
		<Card>
			<Card.Header>{userName}</Card.Header>
			<Card.Img
				variant="top"
				src={profilePic}
			/>
			<Card.Body>
				<Card.Title>{firstName + " " + lastName}</Card.Title>
				<Card.Text>
					With supporting text below as a natural lead-in to additional content.
				</Card.Text>
				<Button
					onClick={() => dispatch(toggleFollowStatus(_id))}
					variant="primary">
					{followings && followings.some((following) => following._id === _id)
						? "un follow"
						: "follow"}
				</Button>
			</Card.Body>
		</Card>
	);
}

export default CardComponent;
