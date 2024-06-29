import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import OTP from "../Pages/Otp";
import Dashboard from "../Pages/Dashboard";
import Chat from "../Components/Chat";
import Profile from "../Components/Profile";
import Loader from "../Components/Loader";

// Lazy-loaded components
const LazyDashboard = lazy(() => import("../Pages/Dashboard"));

const routes = [
	{ path: "/login", element: <Login />, protect: false },
	{ path: "/register", element: <Register />, protect: false },
	{ path: "/otp", element: <OTP />, protect: false },
	{
		path: "/dashboard",
		element: <LazyDashboard />,
		protect: true,
		children: [
			{ path: "chat/:chatId", element: <Chat />, protect: true },
			{ path: "chat/:chatType/:chatId", element: <Chat />, protect: true },
			{ path: "channel/:channelId", element: <Chat />, protect: true },
			{ path: "profile/:userId", element: <Profile />, protect: true },
		],
	},
];

const Router = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route
					path="/"
					element={<Navigate to="/dashboard" />}
				/>
				{routes.map((route, index) =>
					route.protect ? (
						<Route
							key={index}
							element={<ProtectedRoute />}>
							<Route
								path={route.path}
								element={route.element}>
								{route.children &&
									route.children.map((childRoute, childIndex) => (
										<Route
											key={childIndex}
											path={childRoute.path}
											element={childRoute.element}
										/>
									))}
							</Route>
						</Route>
					) : (
						<Route
							key={index}
							path={route.path}
							element={route.element}
						/>
					)
				)}
			</Routes>
		</Suspense>
	);
};

export default Router;
