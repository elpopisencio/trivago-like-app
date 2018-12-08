import React, { Component } from 'react';
import styled from 'styled-components';
import 'react-input-range/lib/css/index.css';
import './index.css';
import Distance from './distance/Distance';
import Rating from './rating/Rating';
import Prices from './prices/Prices';
import Amenities from './amenities/Amenities';
import Top from './Top';
import Filter from './Filter';
import Delimeter from '../../commonComponents/Delimeter';

const Container = styled.div`
	background-color: #fff;
	margin: 1em auto;
	padding: 0 1em;
	max-width: 980px;
`;

export default class Filters extends Component {
	state = {
		filtered_by: {
			distance: [],
			rating: [],
			prices: [],
			amenities: [],
		}
	}
	componentDidMount = () => {
		const {hotels} = this.props;
		const filtered_by = {
			distance: [...hotels],
			rating: [...hotels],
			prices: [...hotels],
			amenities: [...hotels],
		}
		this.setState({filtered_by});
	}
	handleFilter = ( filtered_hotels, id ) => {
		const filtered_by = {...this.state.filtered_by, [id]: filtered_hotels};
		this.setState({ filtered_by });
		const filtered_total = this.props.hotels.reduce((total, current) => {
			if(Object.keys(filtered_by).every(key => (
				filtered_by[key].find(element => element.id === current.id)
			))){
				return [...total, current];
			}
			return total;
		}, [])
		this.props.onFilter(filtered_total);
	}
	render = () => {
		return (
			<Container>
				<Top>
					<Delimeter with_margin>
					<Filter><Distance {...this.props} onFilter={this.handleFilter} /></Filter>
					</Delimeter>
					<Delimeter with_margin>
					<Filter><Rating {...this.props} onFilter={this.handleFilter} /></Filter>
					</Delimeter>
					<Delimeter with_margin>
					<Filter><Prices {...this.props} onFilter={this.handleFilter} /></Filter>
				</Delimeter>
				<Delimeter>
				<Amenities {...this.props} onFilter={this.handleFilter} />
			</Delimeter>
					</Top>
				</Container>
		)
	}
}