import React from "react";
import update from "react-addons-update";
import ContactInfo from "./ContactInfo";
import ContactCreator from "./ContactCreator";
import ContactRemover from "./ContactRemover";
import ContactEditor from "./ContactEditor";

class Contacts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contactData: [
				{ name: "eddy", phone: 11111111 },
				{ name: "ming", phone: 22222222 },
			],
			selectedKey: -1,
			selected: {
				name: "",
				phone: "",
			},
		};
	}

	_insertContact(name, phone) {
		this.setState({
			contactData: update(this.state.contactData, {
				$push: [{ name, phone }],
			}),
		});
	}

	_onSelect(key) {
		let changeKey;

		if (key === this.state.selectedKey) {
			console.log("key select cancelled");
			changeKey = {
				selectedKey: -1,
				selected: {
					name: "",
					phone: "",
				},
			};
		} else {
			console.log(`${key} is selected`);
			changeKey = {
				selectedKey: key,
				selected: this.state.contactData[key],
			};
		}

		this.setState(changeKey);

		return key;
	}

	_isSelected(key) {
		if (this.state.selectedKey === key) {
			return true;
		}
		return false;
	}

	_onRemove() {
		if (this.state.selectedKey == -1) {
			console.log("contact not selected");
			return;
		}

		this.setState({
			contactData: update(this.state.contactData, {
				$splice: [[this.state.selectedKey, 1]],
			}),
			selectedKey: -1,
		});
	}

	_onEdit(name, phone) {
		this.setState({
			contactData: update(
				this.state.contactData,
				{
					[this.state.selectedKey]: {
						name: { $set: name },
						phone: { $set: phone },
					},
				},
			),
			selected: {
				name,
				phone,
			},
		});
	}

	render() {
		return (
			<div>
				<ul>
					{ this.state.contactData.map((data, i) => (
						<ContactInfo
							name= {data.name}
							phone= {data.phone}
							key= {i}
							contactKey = {i}
							onSelect = { this._onSelect.bind(this) }
							isSelected = { this._isSelected.bind(this)(i) }
						/>
					)) }
				</ul>
				<ContactCreator onInsert={ this._insertContact.bind(this) }/>
				<ContactRemover onRemove={ this._onRemove.bind(this) } />
				<ContactEditor
					onEdit={ this._onEdit.bind(this) }
					isSelected={ (this.state.selectedKey !== -1) }
					contactInfo= { this.state.selected }
				/>
			</div>
		);
	}
}

export default Contacts;
