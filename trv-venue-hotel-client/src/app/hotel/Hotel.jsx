import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Room from './room/Room';
import Details from './details/Details';

const Container = styled.div`
	background-color: #37454d;
	padding: 1px;
	min-height: 100vh;
`;

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
				console.log(response.data[0])
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
	render = () => {
		const { rooms, hotel, show_only_two } = this.state;
		if (rooms && hotel) {
			const { match } = this.props;
			let sorted_rooms = this.state.rooms.sort((a, b) => (
				a.price_in_usd - b.price_in_usd
			));
			let there_are_more = false;
			if (show_only_two) {
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
							<Room room={room} />
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
		return <Fragment />
	}
}