import styled from 'styled-components';
import React, { Component } from 'react';

const StyledDiv = styled.div`
  text-align: center;
  color: ${props => props.color};
  width: 200px;
  height: 200px;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.color};
  padding: 60px;
`;

const Select = styled.select`
  width: 100px;
  height: 30px;
  padding-left: 10px;
  border-radius: 0;
  appearance: none;
  color: ${props => props.color};
`

const Btn = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: white;
  color: ${props => props.color};
  border: 2px solid ${props => props.color};  
`
 
class Card extends Component {
  constructor() {
    super();

    this.state = {
      color: ""
    };
    this.handlePickColor = this.handlePickColor.bind(this);
  }

  render() {
    const { children, toggle } = this.props;
    return (
      <div>
        <StyledDiv color={this.state.color}>
          {children}
          <Select onChange={this.handlePickColor} value={this.state.color} color={this.state.color}>
            <option value=""></option>
            <option value="#ff2445">Red</option>
            <option value="#50a5ff">Blue</option>
            <option value="#1bc7b6">Green</option>
            <option value="palevioletred">Violet</option>
          </Select>
        </StyledDiv>
        <Btn 
            onClick={toggle}
            color={this.state.color}
          >Toggle</Btn>
      </div>
    )
  }

  handlePickColor(event) {
    this.setState({ color: event.target.value});
  }
}

export default Card;