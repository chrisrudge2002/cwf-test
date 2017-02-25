import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';

class MainGrid extends Component {
	createTile(item) {
		return (
			<div key={item.i} className="grid-item">{item.i}</div>
		);
	}
	render() {
		return (
			<ReactGridLayout className="main-grid" {...this.props.gridLayout}>
				{_.map(this.props.gridLayout.layout, this.createTile)}
			</ReactGridLayout>
		);
	}
}

function mapPropsToState(state) {
	return { gridLayout: state.gridLayout };
}

export default connect(mapPropsToState)(MainGrid);
