import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.header`
	background-color: #37454d;
	height: 100vh;
	margin: auto;
	border: 1px solid #c3c3c3;
	border-width: 0 1px 0 1px;
`;

export default class Home extends Component {
	state = {
		hotels: [],
	}
	componentDidMount = () => {
		axios.get('/hotels')
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});
	}
	render = () => {
		return (
			<Container>
				Home
			</Container>
		)
	}
}