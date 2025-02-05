import React, { Component } from 'react';

interface State {
  shouldThrow: boolean;
}

class ErrorButton extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { shouldThrow: false };
  }

  handleClick = () => {
    this.setState({ shouldThrow: true });
  };

  render() {
    if (this.state.shouldThrow) {
      throw new Error('An error has occurred: Problem with generating error!');
    }

    return <button onClick={this.handleClick}>Generate Error</button>;
  }
}

export default ErrorButton;
