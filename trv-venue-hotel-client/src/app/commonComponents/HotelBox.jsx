import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Title from './Title';
import Image from './Image';
import Link from './Link';
import Button from './Button';
import ButtonsContainer from './ButtonsContainer';
import Delimeter from './Delimeter';

const Container = styled.div`
	background-color: #fff;
	margin: 1em auto;
	max-width: 980px;
	padding: 1em;
	display: flex;
	overflow: hidden;
	position: relative;
	box-shadow: 0 0 10px #c5c5c5;
`;

export default class Hotel extends Component{
	state = {
		show_more: true,
	}
	componentDidMount = () => {
		const show_more = !this.props.is_expandable;
		this.setState({ show_more });
	}
	handleButton = () => {
		this.setState({ show_more: !this.state.show_more });
	}
	render = () => {
		const { hotel, is_expandable } = this.props;
		const { show_more } = this.state;
		return (
			<Container>
				<Image show_more={ show_more } src={hotel.images[0]}/>
				<Delimeter>
				<Title>{hotel.name}</Title>
				{
					is_expandable
						? <ButtonsContainer>
						<Button onClick={this.handleButton}>{show_more ? 'show less' : 'show more'}</Button>
						<Link to={'/hotel/' + hotel.id}>find a room</Link>
						</ButtonsContainer>
						: <Fragment/>
				}
				</Delimeter>
			</Container>
		)
	}
}