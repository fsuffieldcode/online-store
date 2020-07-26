import { createStore, combineReducers } from 'redux';
import filtersReducer from '../reducers/filters';

function configureStore(state = { category: '' }) {
	return createStore(
		combineReducers({
			filters: filtersReducer,
		}),
		state
	);
}

export default configureStore;
