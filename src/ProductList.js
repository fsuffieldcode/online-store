import React, { Component } from 'react';
import styled from 'styled-components';
import Inventory from './Inventory';

const ProductWrapper = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: 2rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	justify-items: center;
	grid-gap: 2rem;
	grid-auto-flow: row;
	margin-left: auto;
	margin-right: auto;
`;

const ProductTile = styled.div`
	width: 400px;
	min-height: 400px;
	background-size: cover;
	background-position: center;
	background-image: ${(props) => `url('${props.image}')`};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

export default class ProductList extends Component {
	state = {
		displayedProducts: Inventory,
	};

	render() {
		const products = this.state.displayedProducts;
		console.log(products);
		return (
			<section>
				<ProductWrapper>
					{products.map((product) => {
						return (
							<ProductTile key={product.id} image={product.image}></ProductTile>
						);
					})}
				</ProductWrapper>
			</section>
		);
	}
}
