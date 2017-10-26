import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home";
import Header from "../Header";
import About from "../About";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header/>
					<Route exact path="/" component={Home}></Route>
					<Route path="/about" component={About}></Route>
				</div>
			</Router>
		);
	}
}

export default App;
