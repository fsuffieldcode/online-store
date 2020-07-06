import React from 'react';
import './App.css';
import TopBanner from './TopBanner';
import Navbar from './Navbar';
import Hero from './Hero';
import Tiles from './Tiles';

function App() {
	return (
		<div className='App'>
			<TopBanner />
			<Navbar />
			<Hero />
			<Tiles />
		</div>
	);
}

export default App;
