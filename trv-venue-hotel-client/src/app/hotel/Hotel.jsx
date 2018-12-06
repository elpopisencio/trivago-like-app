import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Room from './room/Room';
import Details from './details/Details';
import Container from '../commonComponents/Container';

export default class Hotel extends Component {
	state = {
		show_only_two: true,
	}
	componentDidMount = () => {
		const { id } = this.props.match.params;
		axios.get('/rooms?hotel_id=' + id)
			.then((response) => {
				this.setState({
					rooms: response.data,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});
		axios.get('/hotels?id=' + id)
			.then((response) => {
				this.setState({
					hotel: response.data[0],
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});
	}
	handleButton = () => {
		this.setState({
			show_only_two: false,
		})
	}
	handleBooking = (room, id) => {
		const { hotel } = this.state;
		const previous_booking = JSON.parse(localStorage.getItem("latest_booking"));
		const user = JSON.parse(localStorage.getItem("user"));
		const new_booking = { room, hotel, user };
		let latest_booking;
		if(previous_booking){
			latest_booking = {...previous_booking, [id]: new_booking};
		}else{
			latest_booking = {[id]: new_booking};
		}
		localStorage.setItem('latest_booking', JSON.stringify(latest_booking));
	}
	render = () => {
		const { rooms, hotel, show_only_two } = this.state;
		if (rooms && hotel) {
			let sorted_rooms = this.state.rooms.sort((a, b) => (
				a.price_in_usd - b.price_in_usd
			));
			let there_are_more = false;
			if (show_only_two && sorted_rooms.length > 2) {
				there_are_more = true;
				sorted_rooms = sorted_rooms.slice(0, 2);
			}
			return (
				<Container>
					{
						<Details hotel={this.state.hotel} />
					}
					{
						sorted_rooms.map(room => (
							<Room onBooking={this.handleBooking} room={room} key={room.id}/>
						))
					}
					{
						there_are_more
							? <button onClick={this.handleButton}>show more</button>
							: <Fragment />
					}
				</Container>
			)
		}
		return <Container />
	}
}
