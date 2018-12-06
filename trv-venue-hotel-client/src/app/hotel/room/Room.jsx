import React from 'react';
import styled from 'styled-components';
import Title from '../../commonComponents/Title';
import Link from '../../commonComponents/Link';

const Container = styled.div`
	background-color: #fff;
	margin: 1em auto;
	max-width: 980px;
	padding: 1em;
	display: flex;
	overflow: hidden;
`;

export default function Room({ room, onBooking }) {
	const id = uuidv4();
	return (
		<Container>
			<Title>{room.name}</Title>
			<div>{room.description}</div>
			<div>{room.price_in_usd}</div>
			<Link to={'/confirmation/' + id} onClick={() => onBooking(room, id)}>book now</Link>
		</Container>
	)
}

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		// eslint-disable-next-line
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}