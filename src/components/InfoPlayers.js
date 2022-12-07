import React, { Component } from 'react';
import InfoPlayer from './InfoPlayer';

const styles = {
  infoPlayers: {
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    height: '100%',
    width: '1%',
    backgroundColor: 'rgba(207,219,232, 0.7)',
    borderRadius: '5px',
  },
};

export default class InfoPlayers extends Component {
  render() {
    const { players } = this.props;
    return (
      <div style={styles.infoPlayers}>
        <InfoPlayer player={players[0]} />
        <span style={styles.separator} />
        <InfoPlayer player={players[1]} />
      </div>
    );
  }
}
