import React from 'react';
import TopBanner from './TopBanner';
import Navbar from './Navbar';
import Hero from './Hero';
import Tiles from './Tiles';
import Footer from './Footer';

export default function Home() {
	return (
		<>
			<TopBanner />
			<Navbar />
			<Hero />
			<Tiles />
			<Footer />
		</>
	);
}
