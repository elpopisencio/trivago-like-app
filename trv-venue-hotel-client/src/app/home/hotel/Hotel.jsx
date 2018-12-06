import React from 'react';
import styled from 'styled-components';
import Title from '../../commonComponents/Title';
import Image from '../../commonComponents/Image';
import Link from '../../commonComponents/Link';

const Container = styled.div`
	background-color: #fff;
	margin: 1em auto;
	max-width: 980px;
	padding: 1em;
	display: flex;
	overflow: hidden;
`;

export default function Hotel({ hotel }){
	return (
		<Container>
			<Image src={hotel.images[0]}/>
			<Title>{hotel.name}</Title>
			<div>{hotel.description}</div>
			<div>{hotel.distance_to_venue}</div>
			<Link to={'/hotel/' + hotel.id}>see more</Link>
		</Container>
	)
}