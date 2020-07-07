import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';

const dresses = ProductList[0].image;
const tops = ProductList[3].image;
const shoes = ProductList[5].image;
const mens = ProductList[7].image;

const TileWrapper = styled.div`
	width: 100%;
	max-width: 1000px;
	height: 300px;
	margin: 1.2rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-auto-flow: row;
	margin-left: auto;
	margin-right: auto;
`;

const Tile = styled.div`
	width: 400px;
	height: 300px;
	background-size: cover;
	background-position: center;
	background-image: ${(props) => `url('${props.category}')`};
	margin: 3rem;
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
