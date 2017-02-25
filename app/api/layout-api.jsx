import * as constants from 'app/constants';

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
