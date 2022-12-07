import React, { Component } from 'react';
import InfoPhrase from './InfoPhrase';
import InfoPlayers from './InfoPlayers';
import InfoMsg from './InfoMsg';

const styles = {
  info: {
    fontFamily: 'monospace',
    height: '100%',
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
};

export default class InfoWindow extends Component {
  getCurrPlayer = () => {
    const { currPlayer } = this.props;
    return currPlayer ? 1 : 2;
  };

  infoMsgProps = () => {
    const { currMov, finished, players } = this.props;
    return {
      getCurrPlayer: this.getCurrPlayer,
      currMov: currMov,
      finished: finished,
      players: players,
    };
  };

  render() {
    const { players, finished } = this.props;
    return (
      <div style={styles.info}>
        <InfoMsg {...this.infoMsgProps()} />
        <InfoPlayers players={players} />
        <InfoPhrase finished={finished} />
      </div>
    );
  }
}
