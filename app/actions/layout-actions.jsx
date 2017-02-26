import * as types from 'app/actions/types';

export const addGenericFilterPanel = ({ itemX, itemY, itemH, itemW }) => {
	return {
		type: types.ADD_GENERIC_FILTER_PANEL,
		itemX, itemY, itemH, itemW
	};
};

export const addGenericListPanel = ({ itemX, itemY, itemH, itemW }) => {
	return {
		type: types.ADD_GENERIC_LIST_PANEL,
		itemX, itemY, itemH, itemW
	};
};

export const addGenericSummaryPanel = ({ itemX, itemY, itemH, itemW }) => {
	return {
		type: types.ADD_GENERIC_SUMMARY_PANEL,
		itemX, itemY, itemH, itemW
	};
};

export const removeGenericPanel = (panelId) => {
	return {
		type: types.REMOVE_GENERIC_PANEL,
		panelId
	};
};


export const updateGridLayout = layout => {
	return {
		type: types.UPDATE_GRID_LAYOUT,
		layout: layout
	};
};
