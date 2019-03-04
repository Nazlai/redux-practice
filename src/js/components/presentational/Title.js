import React, { Component } from 'react';

class Title extends Component {
  constructor() {
    super();

    this.state = {
      time: '',
      timerId: ''
    }
    this.getTime = this.getTime.bind(this);
  }

  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <h1>{title}</h1>
        <p>{this.state.time}</p>  
      </React.Fragment>
    )
  }

  componentDidMount() {
    const timer = setInterval(this.getTime, 1000);
    this.setState({timerId: timer})
  }

  getTime() {
    const time = new Date().toString();
    this.setState({time: time});
    console.log(this.state);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
    console.log(this.state);
  }
}

export default Title;