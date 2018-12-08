import React, { Component, Fragment } from 'react';
import Buttons from '../buttons/Buttons';
import Filter from '../Filter';

export default class Amenities extends Component{
	state = {
		amenities: {},
	}
	componentDidMount = () => {
		const amenities = this.props.hotels.reduce((total, current) => {
			const uniqueAmenities = current.amenities.filter(amenitie => (
				!total.find(element => element === amenitie)
			))
			return [...total, ...uniqueAmenities];
		},[])
			.reduce((total, current) => {
				return {...total, [current]: true};
			}, {})
		this.setState({
			amenities,
		})
	}
	handleChange = (amenities) => {
		this.setState({
		  amenities,
		});
		const filtered_hotels = this.props.hotels.filter((hotel) => {
			return hotel.amenities.find(amenitie => amenities[amenitie] === true);
		})
		this.props.onFilter(filtered_hotels, 'amenities');
	 }
	render = () => {
		const { amenities } = this.state;
		return (
			<Fragment>
			<Filter>
			<p>rating</p>
				<Buttons wraped values={amenities} onChange={this.handleChange} /></Filter>
			</Fragment>
		)
	}
}