import React, { Component } from 'react';

const styles = {
  infoMsg: {
    fontSize: '2rem',
  },
  infoMsgLine: {
    margin: '0',
    padding: '0',
  },
};
export default class InfoMsg extends Component {
  getThirdLine = () => {
    const { finished, players, getCurrPlayer } = this.props;
    if (!finished) return `Turn: Player ${getCurrPlayer()}.`;
    const winner = players.find((ply) => ply.winner);
    if (winner) return `Winner: ${winner.name}.`;
    return `Nobody wins :(`;
  };

  render() {
    const { currMov, finished } = this.props;
    return (
      <div style={styles.infoMsg}>
        <p style={styles.infoMsgLine}>
          Game has been {finished ? 'finished' : 'started'}.
        </p>
        <p style={styles.infoMsgLine}>Movement number: {currMov}.</p>
        <p style={styles.infoMsgLine}>{this.getThirdLine()}</p>
      </div>
    );
  }
}
