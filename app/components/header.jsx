import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'app/actions/layout-actions';

class Header extends Component {
	constructor(props) {
		super(props);
		this.onAddGenericFilterPanel = this.onAddGenericFilterPanel.bind(this);
		this.onAddGenericListPanel = this.onAddGenericListPanel.bind(this);
		this.onAddGenericSummaryPanel = this.onAddGenericSummaryPanel.bind(this);
	}
	onAddGenericFilterPanel(e) {
		e.preventDefault();
		this.props.dispatch(actions.addGenericFilterPanel());
	}
	onAddGenericListPanel(e) {
		e.preventDefault();
		this.props.dispatch(actions.addGenericListPanel());
	}
	onAddGenericSummaryPanel(e) {
		e.preventDefault();
		this.props.dispatch(actions.addGenericSummaryPanel());
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
						<li className="menu-text"><a onClick={this.onAddGenericSummaryPanel}>Add Summary</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default connect()(Header);
