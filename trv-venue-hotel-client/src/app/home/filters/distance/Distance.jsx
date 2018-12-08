import React, { Component } from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import Inputs from '../inputs/Inputs';

const Container = styled.div`
  width: 100%;
`;

export default class Distance extends Component {
  state = {
    value: { min: 0, max: 9 },
    maxValue: 10,
    minValue: 0,
  };
  componentDidMount = () => {
    const maxValue = this.props.hotels.reduce((final, current) => {
      if (current.distance_to_venue > final) {
        return current.distance_to_venue;
      }
      return final;
    }, 0);
    this.setState({
      maxValue,
      value: {
        min: 0,
        max: maxValue,
      }
    })
  }
  handleChange = (value) => {
    const filtered_hotels = this.props.hotels.filter((hotel) => {
      return hotel.distance_to_venue >= value.min && hotel.distance_to_venue <= value.max;
    })
    this.props.onFilter(filtered_hotels, 'distance');
    this.setState({
      value,
    })
  }
  render = () => {
    return (
      <Container>
        <p>distance to venue</p>
      <Inputs
        onChange={this.handleChange}
        value={this.state.value}
        maxValue={this.state.maxValue}
        minValue={0}
      />
        <InputRange
          step={1}
          maxValue={this.state.maxValue}
          minValue={0}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </Container>
    );
  }
}