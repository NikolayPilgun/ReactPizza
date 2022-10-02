import { Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Basket from "./components/basket/Basket";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NotFoundBlock from "./components/notFoundBlock/NotFoundBlock";
import "./styles/index.scss";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Banner />
			<Routes>
				<Route path="/" element={<Body />} />
				<Route path="basket" element={<Basket />} />
				<Route path="*" element={<NotFoundBlock />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
