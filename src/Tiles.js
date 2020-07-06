import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';

const dresses = ProductList[0].image;
const tops = ProductList[3].image;
const shoes = ProductList[7].image;
const mens = ProductList[8].image;

console.log(dresses);

const TileWrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 1000px;
	background-color: lightgrey;
	height: 300px;
	margin: 3rem 0;
	display: grid;
`;

const Tile = styled.div`
	width: 300px;
	height: 300px;
	background-size: cover;
	background-position: center;
	background-image: ${(props) => `url('${props.imgUrl}')`};
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
