import { Route, Routes } from "react-router-dom";
import Basket from "./components/basket/Basket";
import Body from "./components/body/Body";
import Layout from "./components/layout/Layout";
import NotFoundBlock from "./components/notFoundBlock/NotFoundBlock";
import "./styles/index.scss";

function App() {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Body />} />
					<Route path="basket" element={<Basket />} />
					<Route path="*" element={<NotFoundBlock />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
