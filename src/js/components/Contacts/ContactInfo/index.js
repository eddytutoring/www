import React from "react";

export default class ContactInfo extends React.Component {
	handleClick() {
		this.props.onSelect(this.props.contactKey);
	}

	render() {
		const getStyle = (isSelected) => {
			let style = {};

			if (isSelected) {
				style = {
					fontWeight: "bold",
					backgroundColor: "#4efcd8",
				};
			}

			return style;
		};

		return (
			<li style= { getStyle(this.props.isSelected) }
				onClick= { this.handleClick.bind(this) } >
				{this.props.name} {this.props.phone} {this.props.contactKey}
			</li>
		);
	}
}