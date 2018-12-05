import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Hotel from './hotel/Hotel';
import Filters from './filters/Filters';

const Container = styled.div`
	background-color: ${props => props.theme['background-color']};
	box-shadow: 0 0 10px ${props => props.theme['background-color']};
	padding: 1px;
	min-height: 100vh;
`;

export default class Home extends Component {
	state = {
		hotels: [],
		filtered_hotels: [],
	}
	componentDidMount = () => {
		axios.get('/hotels')
			.then((response) => {
				this.setState({
					hotels: response.data,
					filtered_hotels: response.data,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});
	}
	handleFilter = ( filtered_hotels ) => {
		this.setState({ filtered_hotels });
	}
	render = () => {
		const { hotels, filtered_hotels } = this.state;
		if( hotels.length === 0 ){
			return <Container/>
		}
		return (
			<Container>
				<Filters hotels={ hotels } filtered_hotels={filtered_hotels} onFilter={this.handleFilter}/>
				{
					filtered_hotels.length !== 0 
						? 
							filtered_hotels.map(hotel => (
								<Hotel key={hotel.id} hotel={hotel} />
							))
						:
							<h1>'There aren't hotels for this event'</h1>
				}
			</Container>
		)
	}
}