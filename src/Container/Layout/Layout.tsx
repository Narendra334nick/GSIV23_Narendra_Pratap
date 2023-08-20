import Header from "../../Components/Header/Header";
import Home from "../Home/Home";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Details from "../Details/Details";

export default function Layout() {
	return (
		<div>
			<Header />
			<Box mt={10}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details/:id" element={<Details />} />
					{/* 👈 Renders at /#/app/ */}
					{/* <Route path="/layout" element={<Layout />} /> */}
					{/* 👈 Renders at /#/app/ */}
				</Routes>
			</Box>
		</div>
	);
}
