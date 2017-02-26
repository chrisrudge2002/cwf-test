import * as constants from 'app/constants';

export const initialState = {
	gridLayout: {
		autoSize: false,
		cols: constants.COL_COUNT,
		height: window.innerHeight,
		layout: [
			{ i: `${constants.PANEL_NAME_FILTER} #${1}`, x: 0, y: 0, w: 3, h: 3 },
			{ i: `${constants.PANEL_NAME_LIST} #${1}`, x: 3, y: 0, w: 5, h: 2 },
			{ i: `${constants.PANEL_NAME_SUMMARY} #${1}`, x: 3, y: 2, w: 5, h: 1 }
		],
		lastGFPInstance: 1,
		lastGLPInstance: 1,
		lastGSPInstance: 1,
		rowHeight: (window.innerHeight - constants.HEADER_HEIGHT) / constants.ROW_COUNT,
		width: window.innerWidth
	}
};
