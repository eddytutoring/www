import React from "react";
import HelloWorld from "../helloWorld";
import Contacts from "../Contacts";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<HelloWorld/>
				<Contacts/>
			</div>
		);
	}
}
