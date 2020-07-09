import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledNav = styled.nav`
	height: 75px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1000px;
	max-width: 100vw;
	margin-left: auto;
	margin-right: auto;

	ul {
		margin: 0;
		padding: 0;
		height: 100%;
		list-style: none;
		display: flex;
		align-items: center;
	}

	ul > * {
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
	}
	.left-links {
		margin-right: auto;
	}
	.right-links {
		margin-left: auto;
	}

	.left-links a:hover,
	.right-links a:hover {
		text-decoration: underline;
	}
	.logo {
		font-style: italic;
		font-size: 2rem;
		letter-spacing: 0.3rem;
		display: flex;
	}

	ul .list-item {
		display: flex;
		font-size: 1rem;
		margin: 1rem;
	}

	@media (max-width: 400px) {
		height: 50px;
		.left-links,
		.right-links {
			display: none;
		}
	}
`;

export default class Navbar extends Component {
	render() {
		return (
			<StyledNav>
				<ul className='left-links'>
					<li className='list-item'>
						<Link to='/shop/men'>Men</Link>
					</li>
					<li className='list-item'>
						<Link to='/shop/women'>Women</Link>
					</li>
				</ul>
				<div className='logo'>
					<Link to='/'>POISSON</Link>
				</div>
				<ul className='right-links'>
					<li className='list-item'>
						<Link to='/search'>
							<i class='fas fa-search'></i>Search
						</Link>
					</li>
					<li className='list-item'>
						<Link to='/cart'>
							<i class='fas fa-shopping-cart'></i>Cart
						</Link>
					</li>
				</ul>
			</StyledNav>
		);
	}
}
