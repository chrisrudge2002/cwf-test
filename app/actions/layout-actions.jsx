import * as layoutAPI from 'app/api/layout-api';
import * as types from 'app/actions/types';

export const addGenericFilterPanel = () => {
	return {
		type: types.ADD_GENERIC_FILTER_PANEL
	};
};

export const addGenericListPanel = () => {
	return {
		type: types.ADD_GENERIC_LIST_PANEL
	};
};

export const addGenericSummaryPanel = () => {
	return {
		type: types.ADD_GENERIC_SUMMARY_PANEL
	};
};

export const updateGridLayout = layout => {
	return {
		type: types.UPDATE_GRID_LAYOUT,
		layout: layout
	};
};
