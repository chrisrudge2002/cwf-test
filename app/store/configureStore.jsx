import * as redux from 'redux';
import thunk from 'redux-thunk';

import { layoutReducer } from 'app/reducers/layout-reducer';

export const configure = (initialState = {}) => {
	const reducer = redux.combineReducers({
		gridLayout: layoutReducer
	});

	const store = redux.createStore(reducer, initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};
