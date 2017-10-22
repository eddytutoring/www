import React from "react";

export default class ContactRemover extends React.Component {
	handleClick() {
		this.props.onRemove();
	}

	render() {
		return (
			<button onClick={ this.handleClick.bind(this) }>Remove</button>
		);
	}
}