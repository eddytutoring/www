import React from 'react';
import Header from '../Header';
import HelloWorld from '../helloWorld';
import Contacts from "../Contacts/index";

class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<HelloWorld/>
				<Contacts/>
			</div>
		);
	}
}

export default App;