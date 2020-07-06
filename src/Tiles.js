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
	margin: 3rem 0;
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
	background-image: ${(props) => `url('${props.imgUrl}')`};
	margin: 3rem;
`;

export default function Tiles() {
	return (
		<TileWrapper>
			<Tile imgUrl={dresses} />
			<Tile imgUrl={tops} />
			<Tile imgUrl={shoes} />
			<Tile imgUrl={mens} />
		</TileWrapper>
	);
}
