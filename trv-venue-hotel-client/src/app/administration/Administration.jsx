import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Hotel from './hotel/Hotel';
import Link from '../commonComponents/Link';
import Container from '../commonComponents/Container';
import ButtonsContainer from '../commonComponents/ButtonsContainer';

const Content = styled.div`
margin: 1em auto;
max-width: 980px;
position: relative;
`;

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
		const name = this.state.hotels.find(hotel => hotel.id === id).name;
		const confirmation = window.confirm("are you shure that you want to delete \""+name+"\"");
		if(!confirmation){
			return undefined;
		}
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
				<Content>
					<ButtonsContainer>
					<Link to={this.props.match.path + '/new-hotel'}>add a new hotel</Link>
				
					</ButtonsContainer>
				
				</Content>
				{
					hotels.map(hotel => (
								<Hotel key={hotel.id} hotel={hotel} onRemove={this.handleRemove}/>
							))
				}
			</Container>
		)
	}
}