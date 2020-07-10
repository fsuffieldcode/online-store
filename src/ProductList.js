import React, { Component } from 'react';
import styled from 'styled-components';
import Inventory from './Inventory';

const ProductListWrapper = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: 2rem 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	justify-items: center;
	grid-gap: 0.5rem;
	grid-auto-flow: row;
	margin-left: auto;
	margin-right: auto;
`;

const ProductWrapper = styled.article`
	margin: 0 0 2rem 0;
`;

const ProductTile = styled.div`
	min-width: 300px;
	height: 300px;
	background-size: cover;
	background-position: center;
	background-image: ${(props) => `url('${props.image}')`};
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

const ProductDescription = styled.div`
	height: 100px;
`;

export default class ProductList extends Component {
	state = {
		displayedProducts: Inventory,
	};

	render() {
		const products = this.state.displayedProducts;
		return (
			<section>
				<ProductListWrapper>
					{products.map((product) => {
						return (
							<ProductWrapper>
								<ProductTile
									key={product.id}
									image={product.image}
								></ProductTile>
								<ProductDescription>
									<h2>{product.name}</h2>
									<p>£{product.price}.00</p>
								</ProductDescription>
							</ProductWrapper>
						);
					})}
				</ProductListWrapper>
			</section>
		);
	}
}
