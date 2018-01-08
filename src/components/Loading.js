import React from 'react';

import '../styling/Loading.css';

class Loading extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: 'Loading',
      timer: null
    };

    this.maxLength = this.state.message.length + 3;
    this.updateLoadingMessage = this.updateLoadingMessage.bind(this);
  }

  componentDidMount() {
    let timer = setInterval(this.updateLoadingMessage, 500);
    this.setState({timer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <div className="LoadingContainer">
        <p className="LoadingMessage">{this.state.message}</p>
      </div>
    );
  }

  updateLoadingMessage() {

    let newMessage = this.state.message;

    if (newMessage.length >= this.maxLength) newMessage = newMessage.slice(0, -3);
    else newMessage = newMessage + '.';

    this.setState({
      message: newMessage
    });
  }
}

export default Loading;