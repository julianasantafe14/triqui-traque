import React, { Component } from 'react';

const styles = {
  entry: {
    border: '1px solid #ccc',
    cursor: 'pointer',
    fontFamily: 'monospace',
    fontSize: '6rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: '#787c91',
  },
};
export default class BoardEntry extends Component {
  state = { hover: false };

  setStyle = (currState) => {
    if (currState) {
      return { ...styles.entry, backgroundColor: 'rgba(238, 238, 238, 0.678)' };
    }
    return { ...styles.entry, backgroundColor: 'white' };
  };

  boardEntryProps = () => {
    const { boardEntry, handleEntry } = this.props;
    const { hover } = this.state;
    return {
      onMouseEnter: () => this.setState({ hover: true }),
      onMouseLeave: () => this.setState({ hover: false }),
      onClick: () => {
        handleEntry(boardEntry.index);
      },
      style: { ...this.setStyle(hover) },
    };
  };

  render() {
    const { boardEntry } = this.props;
    return <div {...this.boardEntryProps()}>{boardEntry.value}</div>;
  }
}
