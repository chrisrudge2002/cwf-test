import React, { Component } from 'react';

import Header from 'app/components/header';
import MainGrid from 'app/components/main-grid';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<MainGrid/>
				{this.props.children}
			</div>
		);
	}
}
