import React, { Component } from 'react';

const styles = {
  footer: {
    gridColumn: '1/2',
    gridRow: '3/4',
    backgroundColor: '#0c3c9c',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'monospace',
    color: '#cfdbe8',
    fontSize: '0.9rem',
  },
};
export default class Footer extends Component {
  render() {
    return (
      <div style={styles.footer}>
        Made By Juliana Santafe and Juliana Castañeda.
      </div>
    );
  }
}
