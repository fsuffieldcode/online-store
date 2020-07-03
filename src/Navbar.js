import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledNav = styled.nav`
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;

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
		font-size: 4vw;
		letter-spacing: 0.3rem;
		display: flex;
		justify-content: center;
	}

	ul .list-item {
		display: flex;
		font-size: 1rem;
		margin: 1rem;
	}
`;

export default class Navbar extends Component {
	render() {
		return (
			<Router>
				<StyledNav>
					<ul className='left-links'>
						<li className='list-item'>
							<Link to='/'>Men</Link>
						</li>
						<li className='list-item'>
							<Link to='/'>Women</Link>
						</li>
					</ul>
					<div className='logo'>
						<Link to='/'>POISSON</Link>
					</div>
					<ul className='right-links'>
						<li className='list-item'>
							<Link to='/'>Search</Link>
						</li>
						<li className='list-item'>
							<Link to='/'>Cart</Link>
						</li>
					</ul>
				</StyledNav>
			</Router>
		);
	}
}
