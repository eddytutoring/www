import "../scss/base2.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/helloWorld';

const rootElement = document.getElementById('app');
ReactDOM.render(<HelloWorld />, rootElement);