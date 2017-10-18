import React from 'react';
import Header from '../Header';
import HelloWorld from '../helloWorld';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<HelloWorld/>
			</div>
		);
	}
}

export default App;