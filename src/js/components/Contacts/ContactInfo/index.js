import React from "react";

export default class ContactInfo extends React.Component {
	shouldComponentUpdate(nextProps) {
		return (JSON.stringify(nextProps) !== JSON.stringify(this.props));
	}

	handleClick() {
		this.props.onSelect(this.props.contactKey);
	}

	render() {
		console.log("rendered: " + this.props.name);

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