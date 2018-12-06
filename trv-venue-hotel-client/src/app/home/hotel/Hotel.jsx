import React from 'react';
import styled from 'styled-components';
import Title from '../../commonComponents/Title';
import Image from '../../commonComponents/Image';
import Link from '../../commonComponents/Link';
import ButtonsContainer from '../../commonComponents/ButtonsContainer';

const Container = styled.div`
	background-color: #fff;
	margin: 1em auto;
	max-width: 980px;
	padding: 1em;
	display: flex;
	overflow: hidden;
	position: relative;
`;

export default function Hotel({ hotel }){
	return (
		<Container>
			<Image src={hotel.images[0]}/>
			<Title>{hotel.name}</Title>
			<ButtonsContainer>
			<Link to={'/hotel/' + hotel.id}>show more</Link>
			<Link to={'/hotel/' + hotel.id}>find a room</Link>
			</ButtonsContainer>
		</Container>
	)
}