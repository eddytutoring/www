// eslint-disable-next-line no-unused-vars
import React from "react"; // eslint-disable no-unused-vars
import ReactDOM from "react-dom";
import "react-hot-loader/patch"; // eslint-disable-line import/no-extraneous-dependencies
import "../scss/base.scss";
import App from "./components/App";

const rootElement = document.getElementById("app");
ReactDOM.render(<App/>, rootElement);

// module hot returns true if the config's in development,
// and in production mode, it will be returned as false
if (process.env.NODE_ENV !== "production") {
	console.log("this is for dev mode");
}

if (module.hot) {
	module.hot.accept("./components/App", () => {
		const NextApp = require("./components/App").default; // eslint-disable-line global-require
		ReactDOM.render(<NextApp/>, document.getElementById("app"));
	});
}
