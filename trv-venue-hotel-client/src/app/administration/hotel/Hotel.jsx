import React from 'react';
import styled from 'styled-components';
import Title from '../../commonComponents/Title';
import Image from '../../commonComponents/Image';
import Button from '../../commonComponents/Button';
import ButtonsContainer from '../../commonComponents/ButtonsContainer';
import Delimeter from '../../commonComponents/Delimeter';

const Container = styled.div`
	background-color: #fff;
	margin: 1em auto;
	max-width: 980px;
	padding: 1em;
	display: flex;
	overflow: hidden;
	position: relative;
	box-shadow: 0 0 10px #c5c5c5;
`;

export default function Hotel({ hotel, onRemove }){
	return (
		<Container>
			<Image src={hotel.images[0]}/>
			<Delimeter>
			<Title>{hotel.name}</Title>
			<div>{hotel.description}</div>
			<div>distance to venue: {hotel.distance_to_venue}</div>
			<ButtonsContainer>
			<Button onClick={() => onRemove(hotel.id)}>remove</Button>

			</ButtonsContainer>
			</Delimeter>
		</Container>
	)
}