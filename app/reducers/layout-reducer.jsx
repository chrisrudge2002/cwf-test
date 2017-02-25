import * as constants from 'app/constants';
import * as types from 'app/actions/types';

export const layoutReducer = (state = {}, action) => {
	let instance;
	switch (action.type) {
		case types.ADD_GENERIC_FILTER_PANEL:
			instance = state.lastGFPInstance + 1;
			return {
				...state,
				layout: [ ...state.layout, { i: `${constants.PANEL_NAME_FILTER} #${instance}`, x: 0, y: 0, w: 1, h: 1 } ],
				lastGFPInstance: instance
			};
		case types.ADD_GENERIC_LIST_PANEL:
			instance = state.lastGLPInstance + 1;
			return {
				...state,
				layout: [ ...state.layout, { i: `${constants.PANEL_NAME_LIST} #${instance}`, x: 0, y: 0, w: 2, h: 3 } ],
				lastGLPInstance: instance
			};
		case types.ADD_GENERIC_SUMMARY_PANEL:
			instance = state.lastGSPInstance + 1;
			return {
				...state,
				layout: [ ...state.layout, { i: `${constants.PANEL_NAME_SUMMARY} #${instance}`, x: 0, y: 0, w: 2, h: 3 } ],
				lastGSPInstance: instance
			};
		case types.UPDATE_GRID_LAYOUT:
			return {
				...state,
				layout: [...action.layout]
			};
		default:
			return state;
	}
};

