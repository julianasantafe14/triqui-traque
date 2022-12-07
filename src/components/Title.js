import React, { Component } from 'react';

const styles = {
  h1Section: {
    color: '#323658',
    fontFamily: 'monospace',
    gridColumn: '1/2',
    gridRow: '1/2',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  h1: {
    fontSize: '4rem',
    margin: 0,
    borderBottom: '0.4rem solid #323658',
  },
};

export default class Title extends Component {
  render() {
    return (
      <div style={styles.h1Section}>
        <h1 style={styles.h1}>{this.props.children}</h1>
      </div>
    );
  }
}
