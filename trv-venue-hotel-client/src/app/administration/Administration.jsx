import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Hotel from './hotel/Hotel';
import Link from '../commonComponents/Link';
import Container from '../commonComponents/Container';

export default class Administration extends Component {
	state = {
		hotels: [],
	}
	componentDidMount = () => {
		this.handleFetch();
	}
	handleFetch = () => {
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
	handleRemove = (id) => {
		alert('remove ' + id);
		axios.delete('/hotels/'+id)
		.then((response) => {
			this.handleFetch();
		})
		.catch(function (error) {
			console.log(error);
		})
		.then(function () {
		});
	}
	render = () => {
		const { hotels } = this.state;
		if( hotels.length === 0 ){
			return <Container/>
		}
		return (
			<Container>
				<Link to={this.props.match.path + '/new-hotel'}>add a new hotel</Link>
				{
					hotels.map(hotel => (
								<Hotel key={hotel.id} hotel={hotel} onRemove={this.handleRemove}/>
							))
				}
			</Container>
		)
	}
}