import React from "react";
import "./App.css";
import Layout from "./Container/Layout/Layout";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { HashRouter } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<HashRouter>
					<Layout />
				</HashRouter>
			</Provider>
		</div>
	);
}

export default App;
