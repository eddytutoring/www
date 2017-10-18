import React from 'react';

class HelloWord extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'test',
		}
	}
	render(){
		return (
			<div>
				<h1 onClick={()=> {this.setState({name: "eddy"})}} className="base">Click Me</h1>
				<div className="base-level">My name is  {this.state.name}</div>
				<div>Test!!d</div>
			</div>
		);
	}
}

export default HelloWord;