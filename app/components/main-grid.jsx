import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';

import * as actions from 'app/actions/layout-actions';
import * as layoutAPI from 'app/api/layout-api';

class MainGrid extends Component {
	constructor(props) {
		super(props);
		this.createTile = this.createTile.bind(this);
		this.onLayoutChange = this.onLayoutChange.bind(this);
	}
	createTile(item) {
		return (
			<div key={item.i} className="grid-item">
				<span>{item.i}</span>
				<div className="grid-remove-item" onClick={this.onRemoveItem.bind(this, item.i)}>x</div>
			</div>
		);
	}
	onLayoutChange(layout) {
		this.props.dispatch(actions.updateGridLayout(layout));
		layoutAPI.saveLayout(layout);
	}
	onRemoveItem(key) {
		this.props.dispatch(actions.removeGenericPanel(key));
		layoutAPI.saveLayout(key);
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
