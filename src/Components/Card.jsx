import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollowStatus } from "../Store";

function CardComponent({
	id,
	style,
	imgUrl,
	imgWidth,
	imgHeight,
	imgClass,
	title, //userName / chatName
	subTitle, //private/group/channel
	bio,
	cardClass,
	bodyClass,
	footerClass,
	footerFun, //function
}) {
	return (
		<Card className={`${cardClass}`} style={style}>
			{imgUrl && (
				<Card.Img
					variant="bottom"
					as={"img"}
					style={{ width: imgWidth, height: imgHeight }}
					className={` ${imgClass}`}
					src={imgUrl}
				/>
			)}

			<Card.Body className={`${bodyClass}`}>
				{title && <Card.Title>{title}</Card.Title>}
				{subTitle && (
					<Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
				)}
				{bio && <Card.Text>{bio}</Card.Text>}
			</Card.Body>
				{footerFun &&
			<Card.Footer className={`${footerClass}`}>
				{ footerFun()}
			</Card.Footer>
				}
		</Card>
	);
}

export default CardComponent;
