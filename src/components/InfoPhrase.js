import React, { Component } from 'react';

const styles = {
  phrase: {
    height: '10%',
    fontSize: '1.2rem',
    color: '#cfdbe8',
  },
};
export default class InfoPhrase extends Component {
  getPhrase = () => {
    const { finished } = this.props;
    if (!finished) {
      return `Don't forget that the idea is to make three in line. Good Luck!`;
    }
    return `Well Done, That was an amazing game! Let's play again  :)`;
  };

  render() {
    return <div style={styles.phrase}>{this.getPhrase()}</div>;
  }
}
