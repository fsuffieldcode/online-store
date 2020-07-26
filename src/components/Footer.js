import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const StyledFooter = styled.footer`
	background-color: black;
	color: whitesmoke;
	height: 200px;
	padding: 4rem;

	.logo {
		font-style: italic;
		font-size: 2rem;
		letter-spacing: 0.3rem;
		display: flex;
		margin-bottom: 2rem;
	}

	ul {
		padding: 0;
		list-style: none;
	}

	li {
		margin-bottom: 1rem;
	}

	a {
		color: whitesmoke;
	}

	a:hover {
		color: pink;
	}
`;

const FooterWrapper = styled.div`
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
`;

export default function Footer() {
	return (
		<Router>
			<StyledFooter>
				<FooterWrapper>
					<Link to=''>
						<div className='logo'>POISSON</div>
					</Link>
					<ul>
						<Link to='/'>
							<li>SHIPPING & RETURNS</li>
						</Link>
						<Link to='/'>
							<li>PRIVACY POLICY</li>
						</Link>
						<Link to='/'>
							<li>CAREERS</li>
						</Link>
						<Link to='/'>
							<li>BLOG</li>
						</Link>
					</ul>
				</FooterWrapper>
			</StyledFooter>
		</Router>
	);
}
