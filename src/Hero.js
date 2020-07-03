import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
	height: calc(100vh - 50px);
	width: 100vw;
	img {
		min-width: 100%;
		max-width: 100%;
	}
`;
export default function Hero() {
	return (
		<HeroContainer>
			<img src='https://images.unsplash.com/photo-1482270406631-a02c51d93c2f' />
		</HeroContainer>
	);
}
