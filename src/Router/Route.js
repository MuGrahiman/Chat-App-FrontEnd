import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import OTP from "../Pages/Otp";
import Chat from "../Components/Chat";
import Profile from "../Components/Profile";

const routes = [
	{ to: "/login", component: Login, protect: false },
	{ to: "/register", component: Register, protect: false },
	{ to: "/otp", component: OTP, protect: false },
	{ to: "/home/*", component: Dashboard, protect: true },
];
const Router = () => {

	return (
		<Routes>
			<Route
				exact
				path={"login"}
				element={<Login />}
			/>
			<Route
				exact
				path={"register"}
				element={<Register />}
			/>
			<Route
				exact
				path={"otp"}
				element={<OTP />}
			/>
			<Route
				exact
				path="/"
				element={<ProtectedRoute />}>
				<Route
					exact
					path={"dashboard/*"}
					element={<Dashboard />}>
					<Route
						exact
						path={"chat"}
						element={<Chat />}
					/>
					<Route
						exact
						path={"profile/:userId"}
						element={<Profile />}
					/>
				</Route>
			</Route>

			{/* {routes.map((route) => {
				const { to, component, protect } = route;
                return protect ? (
									<Route
										key={to}
										exact
										path="/"
										element={<ProtectedRoute />}>
										<Route
											exact
											path={to}
											Component={component}
										/>
									</Route>
								) : (
									<Route
										key={to}
										path={to}
										Component={component}
									/>
								);
			})} */}
		</Routes>
	);
};
export default Router;
