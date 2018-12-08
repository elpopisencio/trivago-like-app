import React, { Fragment } from 'react';
import styled from 'styled-components';
import Title from '../../commonComponents/Title';
import Link from '../../commonComponents/Link';
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

export default function Room({ room, onBooking, no_button }) {
	const id = uuidv4();
	return (
		<Container>
			<Delimeter>
			<Title>{room.name}</Title>
			<div>{room.description}</div>
			<div>price: {room.price_in_usd}</div>
			<div>max occupancy: {room.max_occupancy}</div>
			
			{
				!no_button
				 ? <ButtonsContainer>
				 <Link no_margin to={'/confirmation/' + id} onClick={() => onBooking(room, id)}>book now</Link>
				 </ButtonsContainer>
				 : <Fragment />
			}
			</Delimeter>
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