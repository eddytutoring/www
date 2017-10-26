import React from "react";
import { Link } from "react-router-dom";
import "../../../scss/header.scss";

export default class Header extends React.Component {
	render() {
		return (
			<ul className="header">
				<li className="header__item"><Link to="/">Home</Link></li>
				<li className="header__item"><Link to="/about">app</Link></li>
			</ul>
		);
	}
}
