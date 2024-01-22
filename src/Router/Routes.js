import Register from "../Pages/Register";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";
import OTP from "../Pages/Otp";

const routes = [
	{ to: "/login", component: Login, protect: false },
	{ to: "/register", component: Register, protect: false },
	{ to: "/otp", component: OTP, protect: false },
	{ to: "/home", component: Dashboard, protect: true },
];

export default routes;
