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

export default function Room({ room }){
	return (
		<Container>
			<Name>{room.name}</Name>
			<div>{room.description}</div>
			<div>{room.price_in_usd}</div>
			<Link to={'/confirmation/' + room.id}>book now</Link>
		</Container>
	)
}