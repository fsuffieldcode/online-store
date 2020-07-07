import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
	max-width: 1000px;
	height: 700px;
	max-height: calc(100vh - 105px);
	/* (height minus navbar and banner ^ ) */
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	overflow: hidden;
	background-size: cover;
	background-position: top;
	background-image: url('https://images.unsplash.com/photo-1552160753-117159821e01');
`;

const StyledButton = styled.a`
	z-index: 999;
	color: white;
	background-color: black;
	border: 1px solid white;
	margin: 0 6rem 6rem 0;
	padding: 1rem;
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
