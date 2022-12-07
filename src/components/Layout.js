import { Component } from 'react';

const styles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: '#ccc',
    gridColumn: '1/2',
    gridRow: '2/3',
    position: 'relative',
  },
};
class Layout extends Component {
  render() {
    return <div style={styles.layout}>{this.props.children}</div>;
  }
}

export default Layout;
