import React from 'react';
import styled from 'styled-components';
import Title from '../../commonComponents/Title';
import Image from '../../commonComponents/Image';
import Button from '../../commonComponents/Button';
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

export default function Hotel({ hotel, onRemove }){
	return (
		<Container>
			<Image src={hotel.images[0]}/>
			<Title>{hotel.name}</Title>
			<div>{hotel.description}</div>
			<div>{hotel.distance_to_venue}</div>
			<ButtonsContainer>
			<Button onClick={() => onRemove(hotel.id)}>remove</Button>

			</ButtonsContainer>
		</Container>
	)
}