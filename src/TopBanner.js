import React, { Component } from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
	max-width: 100%;
	background-color: #aef359;
	height: 30px;
	font-size: 0.6rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default class TopBanner extends Component {
	render() {
		return (
			<BannerContainer>
				<p>
					<span role='img' aria-label='delivery van emoji'>
						🚚
					</span>
					Please note that delivery timeframes are currently extended due to
					COVID-19
				</p>
			</BannerContainer>
		);
	}
}
