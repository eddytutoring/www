import React from 'react';

class ContactInfo extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick() {
		this.props.onSelect(this.props.contactKey);
	}

	render() {
		return (
			<li onClick={this.handleClick.bind(this)}>{this.props.name} {this.props.phone} {this.props.contactKey} </li>
		)
	}
}

export default ContactInfo;