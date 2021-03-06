import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Shop from './Shop';

export default function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/shop' component={Shop} />
				</Switch>
			</Router>
		</div>
	);
}
