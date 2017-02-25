import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';

import * as actions from 'app/actions/layout-actions';
import * as layoutAPI from 'app/api/layout-api';

class MainGrid extends Component {
	constructor(props) {
		super(props);
		this.onLayoutChange = this.onLayoutChange.bind(this);
	}
	createTile(item) {
		return (
			<div key={item.i} className="grid-item">{item.i}</div>
		);
	}
	onLayoutChange(layout) {
		this.props.dispatch(actions.updateGridLayout(layout));
		layoutAPI.saveLayout(layout);
	}
	render() {
		return (
			<ReactGridLayout className="main-grid" {...this.props.gridLayout} onLayoutChange={this.onLayoutChange}>
				{_.map(this.props.gridLayout.layout, this.createTile)}
			</ReactGridLayout>
		);
	}
}

function mapPropsToState(state) {
	return { gridLayout: state.gridLayout };
}

export default connect(mapPropsToState)(MainGrid);
