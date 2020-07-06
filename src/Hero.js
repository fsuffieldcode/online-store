import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
	height: 700px;
	max-height: calc(100vh - 105px);
	/* (height minus navbars ^ ) */
	max-width: 1000px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
	overflow: hidden;
	background-size: cover;
	background-position: top;
	background-image: url('https://images.unsplash.com/photo-1552160753-117159821e01');
`;

const StyledButton = styled.a`
	position: absolute;
	z-index: 999;
	color: white;
	background-color: black;
	border: 1px solid white;
	bottom: 20%;
	right: 22%;
	padding: 0.5rem;
	font-size: 1.2rem;
	&:hover {
		color: black;
		background-color: white;
		border: 1px solid black;
	}
`;

export default function Hero() {
	return (
		<HeroContainer>
			<StyledButton href='/'>SHOP WOMEN'S</StyledButton>
		</HeroContainer>
	);
}
