import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
	height: calc(100vh - 70px);
	img {
		max-width: 100%;
	}
`;

const StyledButton = styled.a`
	position: absolute;
	z-index: 999;
	color: white;
	background-color: black;
	border: 1px solid white;
	top: 40%;
	left: 10%;
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
			<img src='https://images.unsplash.com/photo-1482270406631-a02c51d93c2f' />
		</HeroContainer>
	);
}
