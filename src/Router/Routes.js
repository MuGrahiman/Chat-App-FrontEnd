import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import OTP from "../Pages/Otp";

const routes = [
	{ to: "/login", component: Login, protect: false },
	{ to: "/register", component: Register, protect: false },
	{ to: "/otp", component: OTP, protect: false },
	{ to: "/home", component: Dashboard, protect: true },
];

export default routes;
