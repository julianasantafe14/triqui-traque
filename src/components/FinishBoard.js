import React, { Component } from 'react';
import RestartBtn from './RestartBtn';

const styles = {
  finish: {
    display: 'flex',
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: '60%',
    height: '80%',
    position: 'absolute',
    borderRadius: '5px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
    boxShadow: '1px 2px 3px rgba(0,0,0,0.1)',
    marginTop: '1.5rem',
  },
  finishMsg: {
    fontSize: '2rem',
    fontFamily: 'monospace',
    textAlign: 'center',
    color: '#323658',
  },
};

export default class FinishBoard extends Component {
  getFinishMsg = () => {
    const { winner } = this.props; // winner? ...
    if (winner) {
      return `¡Congratulations ${winner.name}! You have been won the game.`;
    }
    return `¡Wow! That was very closely but nobody wins :(`;
  };

  render() {
    const { restartApp } = this.props;
    return (
      <div style={styles.finish}>
        <div style={styles.finishMsg}>{this.getFinishMsg()}</div>
        <RestartBtn restart={restartApp}>Restart</RestartBtn>
      </div>
    );
  }
}
