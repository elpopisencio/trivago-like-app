import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Label from './Label';
import Checkmark from './Checkmark';

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	padding: 0.5em 0;
	height: 2.5em;
	${({wraped}) => (wraped ? `
		height: auto;
		flex-wrap: wrap;
	` : ``)}
`;

export default class Buttons extends Component {
	handleInputChange = ({ target }) => {
		const { checked, name } = target;
		const values = { ...this.props.values, [name]: checked };
		this.props.onChange(values);
	}
	render = () => {
		const { values } = this.props;
		if (values) {
			return (
				<Container wraped={this.props.wraped}>
					{
						Object.keys(values).map((value => (
							<Label
								checked={values[value]}
								key={value}>
								{value}
								<Button
									name={value}
									type="checkbox"
									checked={values[value]}
									onChange={this.handleInputChange} />
							</Label>
						)))
					}
				</Container>
			)
		}
		return <div></div>
	}
}