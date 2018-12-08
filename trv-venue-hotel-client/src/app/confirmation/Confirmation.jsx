import React from 'react';
import Container from '../commonComponents/Container';
import HotelBox from '../commonComponents/HotelBox';
import Room from '../hotel/room/Room';
import Box from '../commonComponents/Box';
import Button from '../commonComponents/Button';

export default function Confirmation({ match }){
	const latest_booking = JSON.parse(localStorage.getItem("latest_booking"));
	const { id } = match.params;
	console.log(latest_booking);
	if(latest_booking && latest_booking[id]){
		return (
			<Container>
				<HotelBox hotel={latest_booking[id].hotel}/>
				<Room no_button room={latest_booking[id].room} />
				<Box>
					<Button>confirm booking</Button>
				</Box>
			</Container>
		)
	}
	return <Container>empty</Container>
}