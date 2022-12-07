import React, { Component } from 'react';

const styles = {
  errorMsg: {
    width: '100%',
    height: '15%',
    //backgroundColor: '#eee',
    fontSize: '1.1rem',
  },
};

export default class ErrorMsg extends Component {
  render() {
    const { error } = this.props;
    return <div style={styles.errorMsg}>{error}</div>;
  }
}
