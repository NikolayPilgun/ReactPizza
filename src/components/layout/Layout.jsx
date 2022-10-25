import { Outlet, useLocation } from "react-router-dom";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout() {
	const location = useLocation();
	return (
		<>
			<Header />
			{location.pathname !== "/basket" && <Banner />}
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
