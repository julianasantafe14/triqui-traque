import React, { Component } from 'react';

const styles = {
  restartBtn: {
    height: '15%',
    fontSize: '1.3rem',
    fontFamily: 'monospace',
    padding: '12px 28px',
    cursor: 'pointer',
    color: '#323658',
    border: '2px solid #323658',
    borderRadius: '2px',
  },
};
export default class RestartBtn extends Component {
  state = {
    hover: false,
  };

  getStyle = () => {
    const { hover } = this.state;
    if (hover) {
      return { ...styles.restartBtn, backgroundColor: 'rgba(207,219,232,0.4)' };
    }
    return { ...styles.restartBtn, backgroundColor: 'transparent' };
  };

  getBtnProps = () => {
    const { restart } = this.props;
    return {
      style: this.getStyle(),
      onClick: () => restart(),
      onMouseEnter: () => this.setState({ hover: true }),
      onMouseLeave: () => this.setState({ hover: false }),
    };
  };

  render() {
    const { children } = this.props;
    return <button {...this.getBtnProps()}>{children}</button>;
  }
}
