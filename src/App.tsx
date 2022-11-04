import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./components/body/Body";
import Layout from "./components/layout/Layout";
import LoaderComp from "./components/loader/LoaderComp";
import NotFoundBlock from "./components/notFoundBlock/NotFoundBlock";
import "./styles/index.scss";
const Basket = React.lazy(() => import("./components/basket/Basket"));

function App() {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Body />} />
					<Route
						path="basket"
						element={
							<Suspense fallback={<LoaderComp />}>
								<Basket />
							</Suspense>
						}
					/>
					<Route path="*" element={<NotFoundBlock />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
