import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Hotel from './hotel/Hotel';

const Container = styled.div`
	background-color: #37454d;
	padding: 1px;
`;

export default class Home extends Component {
	state = {
		hotels: [],
	}
	componentDidMount = () => {
		axios.get('/hotels')
			.then((response) => {
				this.setState({
					hotels: response.data,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});
	}
	render = () => {
		const { hotels } = this.state;
		return (
			<Container>
				{
					hotels.length !== 0 
						? 
							hotels.map(hotel => (
								<Hotel key={hotel.id} hotel={hotel} />
							))
						:
							<h1>'There aren't hotels for this event'</h1>
				}
			</Container>
		)
	}
}