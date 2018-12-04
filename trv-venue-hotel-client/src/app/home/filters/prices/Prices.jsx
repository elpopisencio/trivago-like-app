import React, { Component } from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import Buttons from '../buttons/Buttons';

const Container = styled.div`
  width: 100%;
`;

function defaultValue(value){
	return {
		low: value,
		medium: value,
		high: value,
	}
};

export default class Prices extends Component {
	state = {
		range_value: { min: 0, max: 3 },
		prices: defaultValue(true),
	};
	handleRangeChange = (range_value) => {
		let prices = { ...defaultValue(true) };	
		if (range_value.min !== 0) {
			prices.low = false;
		}
		if (range_value.max !== 3) {
			prices.high = false;
		}
		if (range_value.max <= 1 || range_value.min >= 2) {
			prices.medium = false;
		}
		console.log(prices);
		this.setState({
			range_value,
			prices,
		});
		this.filter(prices);
	}
	filter = (prices) => {
		const filtered_hotels = this.props.hotels.filter((hotel) => {
			return Object.keys(prices).find(price => prices[price] && price === hotel.price_category);
		})
		this.props.onFilter(filtered_hotels, 'prices');
	}
	handleButtonsChange = (newPrices) => {
		let prices = { ...this.state.prices }
		let range_value = { ...this.state.range_value }
		if (prices.low !== newPrices.low) {
			if(!prices.medium && prices.low){
				return undefined;
			}
			if (newPrices.low) {
				range_value = { ...range_value, min: 0 }
			} else {
				range_value = { ...range_value, min: 1 }
			}
		}
		if (prices.high !== newPrices.high) {
			if(!prices.medium && prices.high){
				return undefined;
			}
			if (newPrices.high) {
				range_value = { ...range_value, max: 3 }
			} else {
				range_value = { ...range_value, max: 2 }
			}
		}
		if (prices.medium !== newPrices.medium) {
			if (newPrices.high !== newPrices.low) {
				if (!newPrices.high) {
					range_value = { ...range_value, max: newPrices.medium ? 2 : 1 }
				} else {
					range_value = { ...range_value, min: newPrices.medium ? 1 : 2 }
				}
			} else {
				if (!prices.high) {
					newPrices = defaultValue(true);
					range_value = { max: 3, min: 0 }
				} else {
					newPrices = defaultValue(false);
					newPrices.medium = true;
					range_value = { max: 2, min: 1 }
				}
			}
		}
		if(newPrices.low && newPrices.high){
			newPrices.medium = true;
		}
		this.setState({
			prices: newPrices,
			range_value
		});
		this.filter(newPrices);
	}
	render = () => {
		return (
			<Container>
				<h2>price category</h2>

				<Buttons values={this.state.prices} onChange={this.handleButtonsChange} />
				<InputRange
					formatLabel={value => `${value}`}
					step={1}
					maxValue={3}
					minValue={0}
					value={this.state.range_value}
					onChange={this.handleRangeChange} />
			</Container>
		);
	}
}