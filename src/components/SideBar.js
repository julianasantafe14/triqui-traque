import React, { Component } from 'react';
import Start from './Start';
import InfoWindow from './InfoWindow';

const styles = {
  info: {
    backgroundColor: '#323658',
    float: 'right',
    gridColumn: '2/3',
    gridRow: '1/4',
    color: '#cfdbe8',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
};

export default class SideBar extends Component {
  infoWindowProps = () => {
    const { players, currMov, currPlayer, finished } = this.props;
    return {
      players: players,
      currMov: currMov,
      currPlayer: currPlayer,
      finished: finished,
    };
  };

  startProps = () => {
    const { players, createPlayer, updateError, error } = this.props;
    const { currFgSelected, figuresBtn, updateFgs } = this.props;
    const { updateFgSelected } = this.props;
    return {
      updateFgSelected: updateFgSelected,
      currFgSelected: currFgSelected,
      figuresBtn: figuresBtn,
      players: players,
      createPlayer: createPlayer,
      updateError: updateError,
      error: error,
      updateFgs: updateFgs,
    };
  };

  render() {
    const { started } = this.props;
    return (
      <div style={styles.info}>
        {started ? (
          <InfoWindow {...this.infoWindowProps()} />
        ) : (
          <Start {...this.startProps()} />
        )}
      </div>
    );
  }
}
