import * as React from 'react';
import './App.css';

const logo = require('./logo.svg');

export default class App extends React.Component<{}, null> {
	render() {
		return (
			<main className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Gecko Robusk</h2>
				</div>
				<p className="App-intro">
					This is the beginning of the Gecko React-Redux-Typescript app
				</p>
			</main>
		);
	}
}