import React from "react";

export default class ContactEditor extends React.Component {
	componentWillReceiveProps(nextProps) {
		this.setState({
			name: nextProps.contactInfo.name,
			phone: nextProps.contactInfo.phone,
		});
	}

	constructor(props) {
		super(props);

		this.state = {
			name: "",
			phone: "",
		};
	}

	handleClick() {
		if (!this.props.isSelected) {
			console.log("contact not selected");
		} else {
			this.props.onEdit(this.state.name, this.state.phone);
		}
	}

	handleChange(e) {
		const nextState = {};

		nextState[e.target.name] = e.target.value;
		this.setState(nextState);
	}

	render() {
		return (
			<div>
				<p>
					<input type="text" name="name" placeholder="name"
						value={this.state.name}
						onChange={this.handleChange.bind(this)}/>
					<input type="text" name="phone" placeholder="phone"
						value={this.state.phone}
						onChange={this.handleChange.bind(this)}/>
					<button onClick={this.handleClick.bind(this)}>Edit</button>
				</p>
			</div>
		);
	}
}
