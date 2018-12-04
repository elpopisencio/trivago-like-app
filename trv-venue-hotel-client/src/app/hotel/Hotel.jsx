import React, { Component } from 'react';
import axios from 'axios';

export default class Hotel extends Component {
	state = {
		rooms: [],
	}	
	componentDidMount = () => {
		const {id} = this.props.match.params;
		axios.get('/rooms?hotel_id=' + id)
			.then((response) => {
				console.log(response.data);
				this.setState({
					rooms: response.data,
				})
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});
	}
	render = () => {
		const { match } = this.props;
		const { rooms } = this.state;
		return (
			<div>
			<h3>ID: {match.params.id}</h3>
			{
				rooms.map(room => (
					<div>room id {room.id}</div>
				))
			}
			</div>
		)
	}
}