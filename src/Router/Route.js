import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import routes from "./Routes";

const Router = () => {
	return (
		<Routes>
			{routes.map((route) => {
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
			})}
		</Routes>
	);
};
export default Router;
