import React from 'react';
import styled from 'styled-components';
import Products from './Products';

const dresses = Products[0].image;
const tops = Products[3].image;
const shoes = Products[5].image;
const mens = Products[7].image;

const TileWrapper = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: 2rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	justify-items: center;
	grid-gap: 2rem;
	grid-auto-flow: row;
	margin-left: auto;
	margin-right: auto;
`;

const Tile = styled.div`
	width: 312px;
	min-height: 250px;
	background-size: cover;
	background-position: center;
	background-image: ${(props) => `url('${props.category}')`};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

const StyledButton = styled.a`
	width: 100px;
	z-index: 999;
	color: white;
	background-color: black;
	border: 1px solid white;
	padding: 0.5rem;
	margin: 0 0.75rem 0.75rem 0;
	font-size: 1.2rem;
	text-align: center;
	&:hover {
		color: black;
		background-color: white;
		border: 1px solid black;
	}
`;

export default function Tiles() {
	return (
		<TileWrapper>
			<Tile category={dresses}>
				<StyledButton category='dresses'>Dresses</StyledButton>
			</Tile>
			<Tile category={tops}>
				<StyledButton category='dresses'>Tops</StyledButton>
			</Tile>
			<Tile category={shoes}>
				<StyledButton category='dresses'>Shoes</StyledButton>
			</Tile>
			<Tile category={mens}>
				<StyledButton category='dresses'>Mens</StyledButton>
			</Tile>
		</TileWrapper>
	);
}
