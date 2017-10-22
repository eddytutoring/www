import React from "react";

class ContactCreator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			phone: "",
		};
	}

	handleChange(e) {
		const nextState = {};
		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	handleClick() {
		const blankInputValues = { name: "", phone: "" };
		this.props.onInsert(this.state.name, this.state.phone);
		this.setState(blankInputValues);
	}

	render() {
		return (
			<div>
				<div>
					<span> {this.state.name} </span> <span> {this.state.phone} </span>
				</div>
				<input onChange={ this.handleChange.bind(this) }
					type="text" name="name" placeholder="name"
					value={ this.state.name } />
				<input onChange={ this.handleChange.bind(this) }
					type="text" name="phone" placeholder="phone"
					value= { this.state.phone }/>
				<button onClick={ this.handleClick.bind(this) }>Insert</button>
			</div>
		);
	}
}

export default ContactCreator;
