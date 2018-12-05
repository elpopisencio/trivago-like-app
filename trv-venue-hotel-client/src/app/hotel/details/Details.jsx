import React from 'react';
import styled from 'styled-components';
import Name from './Name';
import Image from './Image';
import Right from './Right';

const Container = styled.div`
	background-color: #fff;
	margin: 1em auto;
	max-width: 980px;
	padding: 1em;
	display: flex;
	justify-content: space-between;
	overflow: hidden;
	box-shadow: 0 0 10px #c5c5c5;
`;

export default function Details({ hotel }){
	return (
		<Container>
			<Image src={hotel.images[0]}/>
			<Name>{hotel.name}</Name>
			<div>{hotel.description}</div>
			<div>{hotel.distance_to_venue}</div>
			</Container>
	)
}