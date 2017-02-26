import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'app/actions/layout-actions';
import * as constants from 'app/constants';
import * as layoutAPI from 'app/api/layout-api';

class Header extends Component {
	constructor(props) {
		super(props);
		this.onAddGenericFilterPanel = this.onAddGenericFilterPanel.bind(this);
		this.onAddGenericListPanel = this.onAddGenericListPanel.bind(this);
		this.onAddGenericSummaryPanel = this.onAddGenericSummaryPanel.bind(this);
	}
	onAddGenericFilterPanel(e) {
		e.preventDefault();
		const newPanelPosition = layoutAPI.calculateNewLayout(constants.PANEL_NAME_FILTER, this.props.gridLayout.layout);
		this.props.dispatch(actions.addGenericFilterPanel(newPanelPosition));
	}
	onAddGenericListPanel(e) {
		e.preventDefault();
		const newPanelPosition = layoutAPI.calculateNewLayout(constants.PANEL_NAME_LIST, this.props.gridLayout.layout);
		this.props.dispatch(actions.addGenericListPanel(newPanelPosition));
	}
	onAddGenericSummaryPanel(e) {
		e.preventDefault();
		const newPanelPosition = layoutAPI.calculateNewLayout(constants.PANEL_NAME_SUMMARY, this.props.gridLayout.layout);
		this.props.dispatch(actions.addGenericSummaryPanel(newPanelPosition));
	}
	render() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">CWF TEST</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text"><a onClick={this.onAddGenericFilterPanel}>Add Filter Panel</a></li>
						<li className="menu-text"><a onClick={this.onAddGenericListPanel}>Add List Panel</a></li>
						<li className="menu-text"><a onClick={this.onAddGenericSummaryPanel}>Add Summary Panel</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

function mapPropsToState(state) {
	return { gridLayout: state.gridLayout };
}

export default connect(mapPropsToState)(Header);
