import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { setCategoryFilter } from './actions/filters';
import 'normalize.css';
import './index.css';

const store = configureStore();

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(setCategoryFilter('dress'));

unsubscribe();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
