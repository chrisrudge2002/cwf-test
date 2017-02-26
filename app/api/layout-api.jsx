import * as constants from 'app/constants';

export const calculateNewLayout = (type, currentLayout) => {
	let maxItemY = 0;
	let itemX; let itemY; let itemH; let itemW;

	currentLayout.forEach(item => {
		if (item.i.startsWith(type)) {
			if (item.y + item.h > maxItemY) { maxItemY = item.y + item.h; }
		}
	});

	switch (type) {
		case constants.PANEL_NAME_FILTER:
			itemH = 3; itemW = 3; itemX = 0; itemY = maxItemY + 1;
			break;
		case constants.PANEL_NAME_LIST:
			itemH = 2; itemW = 5; itemX = 3; itemY = maxItemY + 1;
			break;
		case constants.PANEL_NAME_SUMMARY:
			itemH = 1; itemW = 5; itemX = 3; itemY = maxItemY + 1;
			break;
	}

	return { itemX, itemY, itemH, itemW	};
};

export const getLayout = () => {
	const layoutJSON = localStorage.getItem(constants.LOCAL_STORAGE_LAYOUT_KEY);
	let layout;

	if (layoutJSON) {
		layout = JSON.parse(layoutJSON);
	}
	return layout;
};

export const saveLayout = layout => {
	const layoutJSON = JSON.stringify(layout);
	localStorage.setItem(constants.LOCAL_STORAGE_LAYOUT_KEY, layoutJSON);
};
