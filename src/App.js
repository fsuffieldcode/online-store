import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';

export default function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		</div>
	);
}
