import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Router from "./Router/Route";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route 
					path="/"
					element={<Navigate to={"/home"} />}
				/>
				<Route
					path="/*"
					element={<Router />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
