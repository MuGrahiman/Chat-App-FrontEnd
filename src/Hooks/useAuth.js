import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Store";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.currentUser);

	const isUserAuthenticated = useCallback(
		() =>
			user !== null &&
			typeof user === "object" &&
			Object.keys(user).length > 0 &&
			user.token !== "",
		[user]
	);

	const [isAuthenticated, setIsAuthenticated] = useState(isUserAuthenticated());

	useEffect(() => {
		setIsAuthenticated((prev) =>
			isUserAuthenticated() !== prev ? isUserAuthenticated() : prev
		);
	}, [isUserAuthenticated]);

	return [
		() => isAuthenticated,
		() => {
			dispatch(removeUser());
			navigate("/login");
		},
	];
};

export default useAuth;
