import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../presentational/Header';
import Title from '../presentational/Title';
import styled from 'styled-components';
import 'normalize.css';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

class Container extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Hello world',
      toggleVisible: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState( prevState => ({
      toggleVisible: !prevState.toggleVisible
    }))
  }

  render() {
    return (
      <Box>
        <Header toggle={this.handleToggle}>
          {this.state.toggleVisible && <Title title={this.state.title}></Title>}
        </Header>
      </Box>
    )
  }
}

const root = document.getElementById('root');
root ? ReactDOM.render(<Container />, root) : false;

export default Container;