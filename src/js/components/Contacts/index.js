import React from 'react';
import ContactInfo from './ContactInfo';
import ContactCreator from './ContactCreator';
import update from 'react-addons-update';

class Contacts extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contactData: [
				{ name: "eddy", phone: 11111111 },
				{ name: "ming", phone: 22222222 }
			],
			selectedKey: -1
		}
	}

	_insertContact(name, phone) {
		let newState = update(this.state, {
			contactData : {
				$push: [{"name": name, "phone": phone}]
			}
		});
		this.setState(newState);
	}

	_onSelect(key) {
		var changeKey;

		if(key == this.state.selectedKey) {
			console.log("key select cancelled");
			changeKey = { selectedKey : -1 };
		}else {
			console.log(key + " is selected");
			changeKey = { selectedKey : key };
		}

		this.setState(changeKey);

		return key;
	}

	render() {
		return (
			<div>
				<ul>
					{ this.state.contactData.map((data, i) => {
						return (
							<ContactInfo name= {data.name} phone= {data.phone} key= {i} contactKey = {i} onSelect = { this._onSelect.bind(this) }/>
						);
					}) }
				</ul>
				<ContactCreator onInsert= { this._insertContact.bind(this) }/>
			</div>
		);
	}
}

export default Contacts;