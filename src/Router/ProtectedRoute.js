import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const [checkAuthentication] = useAuth();
	return checkAuthentication() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
