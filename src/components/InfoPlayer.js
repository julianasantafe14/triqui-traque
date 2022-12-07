import React, { Component } from 'react';

const styles = {
  infPlayerDiv: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px',
    width: '35%',
    justifyContent: 'space-evenly',
    padding: '1rem',
  },
  infPlayerWinner: {
    backgroundColor: 'rgba(238, 238, 238, 0.3)',
    border: '1px solid #ccc',
    boxShadow: '1px 1px 3px rgba(0,0,0,0.2)',
  },
  textPlayers: {
    fontSize: '1.3rem',
    color: '#e6eaed',
  },
};

export default class InfoPlayer extends Component {
  render() {
    const { player } = this.props;
    let stylesPlayer = { ...styles.infPlayerDiv };
    if (player.winner) {
      stylesPlayer = {
        ...stylesPlayer,
        ...styles.infPlayerWinner,
      };
    }
    return (
      <div style={stylesPlayer}>
        <div style={{ fontSize: '1.8rem' }}>Player {player.id + 1}</div>
        <div style={styles.textPlayers}>Name: {player.name}</div>
        <div style={styles.textPlayers}>Figure: {player.figure}</div>
        <div style={styles.textPlayers}>Movements: {player.movNumber}</div>
      </div>
    );
  }
}
