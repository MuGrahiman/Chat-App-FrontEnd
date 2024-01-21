
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import OTP from './Pages/Otp';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Navigate to={'/home'} />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/register'
					element={<Register />}
				/>
				<Route
					path='/otp'
					element={<OTP />}
				/>
				<Route
					path='/home'
					element={<Dashboard />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
