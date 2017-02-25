import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import * as constants from 'app/constants';
import Router from 'app/router/';

// Create the initial state
const initialState = {
	gridLayout: {
		autoSize: false,
		cols: constants.COL_COUNT,
		height: window.innerHeight,
		layout: [
			{ i: `${constants.PANEL_NAME_FILTER} #${1}`, x: 0, y: 0, w: 2, h: 3 },
			{ i: `${constants.PANEL_NAME_LIST} #${1}`, x: 2, y: 0, w: 6, h: 2 },
			{ i: `${constants.PANEL_NAME_SUMMARY} #${1}`, x: 2, y: 2, w: 6, h: 1 }
		],
		lastGFPInstance: 1,
		lastGLPInstance: 1,
		lastGSPInstance: 1,
		rowHeight: (window.innerHeight - constants.HEADER_HEIGHT) / constants.ROW_COUNT,
		width: window.innerWidth
	}
};

// Create and configure the store
const store = require('app/store/configureStore').configure(initialState);

// Load foundation
$(document).foundation();

// App CSS
require('style!css!../node_modules/react-resizable/css/styles.css');
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		{Router}
	</Provider>,
	document.getElementById('app')
);
