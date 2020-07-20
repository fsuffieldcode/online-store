const initialState = {
	category: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CATEGORY_FILTER':
			return {
				...state,
				category: action.type,
			};
		default:
			return state;
	}
};
