import React from 'react';
import styled from 'styled-components';
import Name from './Name';
import Image from './Image';
import Link from './Link';

const Container = styled.div`
	background-color: #fff;
	margin: 1em auto;
	max-width: 980px;
	padding: 1em;
	display: flex;
	overflow: hidden;
`;

export default function Hotel({ hotel, onRemove }){
	return (
		<Container>
			<Image src={hotel.images[0]}/>
			<Name>{hotel.name}</Name>
			<div>{hotel.description}</div>
			<div>{hotel.distance_to_venue}</div>
			<Link onClick={() => onRemove(hotel.id)}>remove</Link>
		</Container>
	)
}