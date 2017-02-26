import * as constants from 'app/constants';
import * as types from 'app/actions/types';

export const layoutReducer = (state = {}, action) => {
	let instance;
	switch (action.type) {
		case types.ADD_GENERIC_FILTER_PANEL:
			instance = state.lastGFPInstance + 1;
			return {
				...state,
				layout: [
					...state.layout,
					{ i: `${constants.PANEL_NAME_FILTER} #${instance}`, x: action.itemX, y: action.itemY, w: action.itemW, h: action.itemH }
				],
				lastGFPInstance: instance
			};
		case types.ADD_GENERIC_LIST_PANEL:
			instance = state.lastGLPInstance + 1;
			return {
				...state,
				layout: [
					...state.layout,
					{ i: `${constants.PANEL_NAME_LIST} #${instance}`, x: action.itemX, y: action.itemY, w: action.itemW, h: action.itemH }
				],
				lastGLPInstance: instance
			};
		case types.ADD_GENERIC_SUMMARY_PANEL:
			instance = state.lastGSPInstance + 1;
			return {
				...state,
				layout: [
					...state.layout,
					{ i: `${constants.PANEL_NAME_SUMMARY} #${instance}`, x: action.itemX, y: action.itemY, w: action.itemW, h: action.itemH }
				],
				lastGSPInstance: instance
			};
		case types.REMOVE_GENERIC_PANEL:
			return {
				...state,
				layout: state.layout.filter(item => item.i !== action.panelId)
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

