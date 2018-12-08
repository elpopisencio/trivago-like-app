import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Input from './Input';
import Form from './Form';
import Label from './Label';
import Select from './Select';
import Button from '../../commonComponents/Button';

const Container = styled.div`
	background-color: ${props => props.theme['background-color']};
	box-shadow: 0 0 10px ${props => props.theme['background-color']};
	padding: 1px;
	min-height: 100vh;
`;

const price_categories = ['low', 'medium', 'high'];

const available_amenities = ['free_parking', 'free_wifi', 'pets', 'restaurant', 'gym', 'pool', 'spa'];

export default class NewHotel extends Component {
	state = {
		name: '',
		description: '',
		distance_to_venue: 0,
		rating: 0,
		price_category: '',
		amenities: [],
		images: ["/img/image-0.jpg"],
	}
	handleAdd = () => {
		axios.post('/hotels', this.state)
			.then((response) => {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});
	}
	handleChange = ({ target }) => {
		const { id, value } = target;
		this.setState({ [id]: value });
	}
	handleAmenities = ({ target }) => {
		const { id, value } = target;
		const amenities = [...this.state.amenities, value];
		console.log(amenities);
		this.setState({ amenities });
	}
	handleSubmit = (event) => {
		this.handleAdd();
	}
	render = () => {
		const { state, handleChange } = this;
		return (
			<Container>
				<Form onSubmit={this.handleSubmit}
					action='/administration'>
				<Label>name: <Input id='name'
					value={state.name}
					onChange={handleChange} />
					</Label>
					<Label>description: <Input id='description'
					value={state.description}
					onChange={handleChange} />
					</Label>
					<Label>distance to venue: <Input id='distance_to_venue'
					value={state.distance_to_venue}
					type='number'
					min='0'
					onChange={handleChange} />
					</Label>
					<Label>rating: <Input id='rating'
					value={state.rating}
					type='number'
					min='0'
					max='5'
					onChange={handleChange} />
					</Label>

				<Label>price category: <Select value={state.price_category} id='price_category' onChange={this.handleChange}>

					<option value=''>choose one</option>
					{
						price_categories.map(category => (
							<option key={category} value={category}>{category}</option>
						))
					}
				</Select>
				</Label>
				<Label>amenities: <Select value='' id='amenities' onChange={this.handleAmenities}>

					<option value=''>choose one or many</option>
					{
						available_amenities.filter(available => (
							!state.amenities.find(chosen => (
								chosen === available
							))
						))
							.map(amenitie => (
								<option key={amenitie} value={amenitie}>{amenitie}</option>
							))
					}
				</Select>
				</Label>
				<Button type='submit'>save hotel</Button>
				</Form>
			</Container>
		)
	}
}