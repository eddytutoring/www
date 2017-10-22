import React from "react";
import "../../../scss/header.scss";

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header__item">item1</div>
				<div className="header__item">item2</div>
				<div className="header__item">item3</div>
			</div>
		);
	}
}
