import React, { Fragment } from 'react';
import styled from 'styled-components';
import Name from './Name';
import Image from './Image';

const Container = styled.div`
	background-color: #fff;
	margin: 1em auto;
	max-width: 980px;
	padding: 1em;
	display: flex;
`;

export default function Hotel({ hotel }){
	console.log(hotel);
	return (
		<Container>
			<Image src={hotel.images[0]}/>
			<Name>{hotel.name}</Name>
			<div>{hotel.description}</div>
			<div>{hotel.distance_to_venue}</div>
		</Container>
	)
}