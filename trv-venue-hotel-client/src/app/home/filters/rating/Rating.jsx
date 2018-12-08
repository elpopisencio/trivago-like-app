import React, { Component } from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import Inputs from '../inputs/Inputs';

const Container = styled.div`
  width: 100%;
`;

export default class Rating extends Component {
  state = {
    value: { min: 0, max: 5 },
  };
  handleChange = (value) => {
    const filtered_hotels = this.props.hotels.filter((hotel) => {
      return hotel.rating > value.min && hotel.rating < value.max;
    })
    this.props.onFilter(filtered_hotels, 'rating');
    this.setState({
      value,
    })
  }
  render = () => {
    return (
      <Container>
      <p>rating</p>
        <Inputs
          onChange={this.handleChange}
          value={this.state.value}
          maxValue={this.state.maxValue}
          minValue={0}
        />
        <InputRange
          formatLabel={value => `${value}`}
          step={0.5}
          maxValue={5}
          minValue={0}
          value={this.state.value}
          onChange={this.handleChange} />
      </Container>
    );
  }
}