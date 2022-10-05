import { Outlet } from "react-router-dom";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout() {
	return (
		<>
			<Header />
			<Banner />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
