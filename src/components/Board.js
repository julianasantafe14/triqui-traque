import { Component } from 'react';
import BoardEntry from './BoardEntry';

const styles = {
  board: {
    display: 'grid',
    backgroundColor: 'white',
    width: '50%',
    height: '80%',
    placeContent: 'center',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridTemplateRows: 'repeat(3,1fr)',
    boxShadow: '1px 2px 3px rgba(0,0,0,0.1)',
    marginTop: '1.5rem',
  },
};
export default class Board extends Component {
  render() {
    const { boardEntries, handleEntry } = this.props;
    return (
      <div style={styles.board}>
        {boardEntries.map((boardEntry) => {
          return (
            <BoardEntry
              handleEntry={handleEntry}
              key={boardEntry.index}
              boardEntry={boardEntry}
            ></BoardEntry>
          );
        })}
      </div>
    );
  }
}
