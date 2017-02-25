import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as actions from 'app/actions/layout-actions';
import { initialState } from 'app/store/initialState';
import * as layoutAPI from 'app/api/layout-api';
import Router from 'app/router/';

// Create and configure the store
const store = require('app/store/configureStore').configure(initialState);

// See if we have a layout saved in local storage, use it if we do
const savedLayout = layoutAPI.getLayout();
if (savedLayout) {
	console.log(savedLayout);
	store.dispatch(actions.updateGridLayout(savedLayout));
}
// Load foundation
$(document).foundation();

// App CSS
require('style!css!../node_modules/react-grid-layout/css/styles.css');
require('style!css!../node_modules/react-resizable/css/styles.css');
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		{Router}
	</Provider>,
	document.getElementById('app')
);
