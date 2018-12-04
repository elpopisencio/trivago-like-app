import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input';

const Container = styled.div`
	display: flex;
	padding: 0.5em 0;
	 height: 2.5em;
`;

export default class Inputs extends Component{
	handleChange = ({target}) => {
		const { id, value } = target;
		const values = {...this.props.value, [id]: value};
		this.props.onChange(values);
	}
	render = () => {
		const { maxValue, minValue, value } = this.props;
		return (
			<Container>
				<Input type='number' id='min' min={minValue} max={maxValue} value={value.min} onChange={this.handleChange} />
				<Input type='number' id='max' min={minValue} max={maxValue} value={value.max} onChange={this.handleChange} />
			</Container>
		)
	}
}