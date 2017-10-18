import React from 'react';

class HelloWord extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		}
	}
	render(){
		return (
			<div>
				<h1 onClick={()=> {this.setState({name: "eddy"})}} className="base">Hello React World</h1>
				<div className="base-level">React Test!! {this.state.name}</div>
				<div>Test!!</div>
			</div>
		);
	}
}

export default HelloWord;