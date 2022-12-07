import React, { Component } from 'react';
import AddPlayer from './AddPlayer';
import ErrorMsg from './ErrorMsg';

const styles = {
  welcomeMsg: {
    fontSize: '2rem',
  },
  start: {
    fontFamily: 'monospace',
    height: '100%',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
};

export default class Start extends Component {
  playerProps = () => {
    const { players, createPlayer, updateError } = this.props;
    const { currFgSelected, figuresBtn, updateFgs } = this.props;
    const { updateFgSelected } = this.props;
    return {
      updateFgSelected: updateFgSelected,
      players: players,
      createPlayer: createPlayer,
      updateError: updateError,
      updateFgs: updateFgs,
      currFgSelected: currFgSelected,
      figuresBtn: figuresBtn,
    };
  };

  playerToRender = () => {
    const { players } = this.props;
    if (!players[0].name) {
      return 0;
    }
    return 1;
  };

  render() {
    const { error } = this.props;
    return (
      <div style={styles.start}>
        <p style={styles.welcomeMsg}>
          Welcome to my Tic-Tac-Toe game! Let's create our Players!
        </p>
        {/*Conditional rendering (player 1 or player 2 form) */}
        <AddPlayer {...this.playerProps()} i={this.playerToRender()} />
        <ErrorMsg error={error} />
      </div>
    );
  }
}
