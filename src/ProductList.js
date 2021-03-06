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
	padding-left: 0.25rem;
	height: 75px;

	h2 {
		font-size: 1rem;
	}
`;

const CategoryButton = styled.div`
	width: 80px;
	height: 100px;
	background-color: black;
	color: white;
`;

export default class ProductList extends Component {
	state = {
		displayedProducts: Inventory,
	};

	// handleFilter = (filter) => {
	// 	const visibleProducts = this.state.displayedProducts;
	// 	const newVisibleProducts = visibleProducts.filter(
	// 		(item) => item.type === filter
	// 	);
	// 	this.setState({
	// 		displayedProducts: Inventory,
	// 	});
	// 	this.setState({
	// 		displayedProducts: newVisibleProducts,
	// 	});

	// 	console.log(this.state.displayedProducts);
	// };

	render() {
		const products = this.state.displayedProducts;
		return (
			<section>
				{/* <CategoryButton onClick={() => this.handleFilter('dress')}>
					DRESSES
				</CategoryButton> */}
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
