import { SET_CATEGORY_FILTER } from '../constants/action-types';

const filtersReducerDefaultState = {
	category: '',
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case SET_CATEGORY_FILTER:
			return {
				...state,
				category: action.payload,
			};
		default:
			return state;
	}
};

export default filtersReducer;
