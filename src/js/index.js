import 'react-hot-loader/patch';
import "../scss/base.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('app');
ReactDOM.render(<App/>, rootElement);

//module hot reutrns true if the config's in development, and in production mode, it will be returned as false
if(process.env.NODE_ENV !== 'production') {
	console.log("this is for dev mode");
}

if (module.hot) {
	module.hot.accept("./components/App", function() {
		const NextApp = require('./components/App').default;
		ReactDOM.render(<NextApp/>, document.getElementById('app'));
	});
}
