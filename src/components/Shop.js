import React from 'react';
import TopBanner from './TopBanner';
import Navbar from './Navbar';
import ProductList from './ProductList';
import Footer from './Footer';

export default function Shop() {
	return (
		<>
			<TopBanner />
			<Navbar />
			<ProductList />
			<Footer />
		</>
	);
}
