// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Layout from './components/Layout';
import Board from './components/Board';
import Title from './components/Title';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import FinishBoard from './components/FinishBoard';

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '65% 35%',
    gridTemplateRows: '20vh 70vh 10vh',
  },
};

const winCases = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [3, 4, 5],
  [6, 4, 2],
  [1, 4, 7],
  [6, 7, 8],
  [2, 5, 8],
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardEntries: [
        { value: null, index: 0, clicked: false },
        { value: null, index: 1, clicked: false },
        { value: null, index: 2, clicked: false },
        { value: null, index: 3, clicked: false },
        { value: null, index: 4, clicked: false },
        { value: null, index: 5, clicked: false },
        { value: null, index: 6, clicked: false },
        { value: null, index: 7, clicked: false },
        { value: null, index: 8, clicked: false },
      ],

      players: [
        { id: 0, figure: null, name: null, movNumber: 0, winner: false },
        { id: 1, figure: null, name: null, movNumber: 0, winner: false },
      ],

      figuresBtn: [
        { value: '☯', clicked: false, selected: false },
        { value: '△', clicked: false, selected: false },
        { value: '✕', clicked: false, selected: false },
        { value: '✺', clicked: false, selected: false },
      ],

      currFgSelected: '',
      lastEntryIndex: null,
      currPlayer: true,
      started: false,
      finished: false,
      currMov: 0,
      startError: null,
    };
    this.baseState = this.state;
  }

  restartApp = () => {
    console.log('restarted', this.baseState);
    this.setState({ ...this.baseState });
  };

  componentDidUpdate = () => {
    const { currMov, lastEntryIndex, finished } = this.state;
    if (finished) return;
    if (currMov < 5) return;
    const cases = winCases.filter((x) => {
      return x.includes(lastEntryIndex);
    });
    this.winValidator(cases, lastEntryIndex);
  };

  getWinner = () => {
    const { players } = this.state;
    return players.find((ply) => ply.winner);
  };

  createPlayer = (newPlayer) => {
    const { players } = this.state;
    const { id } = newPlayer;
    const newPlayers = players.map((player) => {
      return player.id === id ? { ...newPlayer } : { ...player };
    });

    id === 1 //NewPlayer's id
      ? this.setState({ players: newPlayers, started: true })
      : this.setState({ players: newPlayers, started: false });
  };

  handleEntry = (i) => {
    const { currMov, currPlayer, started, boardEntries } = this.state;
    if (!started) return;
    if (boardEntries[i].clicked) return;
    const newEntries = this.updateEntry(i);
    const newPlayers = this.updateCurrMov(i);
    this.setState({
      currMov: currMov + 1,
      currPlayer: !currPlayer,
      boardEntries: newEntries,
      players: newPlayers,
      lastEntryIndex: i,
    });
  };

  winValidator = (cases, i) => {
    const { boardEntries, currMov } = this.state;
    cases.forEach((x) => {
      if (this.isOk(x, boardEntries)) {
        const newPlayers = this.setWinner(boardEntries[i].value);
        this.setState({ players: newPlayers, finished: true });
      }
    });
    if (currMov === 9) this.setState({ finished: true });
  };

  setWinner = (fg) => {
    const { players } = this.state;
    return players.map((ply) => {
      if (ply.figure === fg) {
        console.log('Ganador: ', ply);
        return { ...ply, winner: true };
      }
      return { ...ply, winner: false };
    });
  };

  isOk = (arrCase, entries) => {
    const [a, b, c] = arrCase;
    if (entries[a].value === entries[b].value) {
      if (entries[b].value === entries[c].value) {
        return true;
      }
    }
    return false;
  };

  updateFgs = (fgSelected) => {
    const { figuresBtn } = this.state;
    let newFgState = [];
    let currFg = '';
    if (fgSelected) {
      newFgState = figuresBtn.map((fg) => {
        return fg.value === fgSelected.value
          ? { ...fgSelected, clicked: true }
          : { ...fg, clicked: false };
      });
      currFg = fgSelected.value;
    } else {
      newFgState = figuresBtn.map((fg) => {
        return { ...fg, clicked: false };
      });
    }
    this.setState({ figuresBtn: newFgState, currFgSelected: currFg });
  };

  updateFgSelected = (newFgs) => {
    this.setState({
      figuresBtn: newFgs,
      currFgSelected: '',
    });
  };

  updateError = (errorMsg) => {
    this.setState({ startError: errorMsg });
  };

  updateEntry = (i) => {
    const { boardEntries, currPlayer, players } = this.state;
    const playerEntry = currPlayer ? players[0].figure : players[1].figure;
    const newEntries = boardEntries.map((entry) => {
      if (entry.index === i) {
        return { value: playerEntry, index: i, clicked: true };
      }
      return entry;
    });
    return newEntries;
  };

  updateCurrMov = (i) => {
    const { currPlayer, players } = this.state;
    const index = currPlayer ? 0 : 1;
    const newPlayers = players.map((ply) => {
      if (ply.id === index) {
        return { ...ply, movNumber: ply.movNumber + 1 };
      }
      return { ...ply };
    });
    return newPlayers;
  };

  sideBarProps = () => {
    const { players, currPlayer, started } = this.state;
    const { currMov, finished, startError } = this.state;
    const { figuresBtn, currFgSelected } = this.state;
    return {
      createPlayer: this.createPlayer,
      updateError: this.updateError,
      updateFgs: this.updateFgs,
      updateFgSelected: this.updateFgSelected,
      currFgSelected: currFgSelected,
      figuresBtn: figuresBtn,
      currPlayer: currPlayer,
      players: players,
      started: started,
      currMov: currMov,
      finished: finished,
      error: startError,
    };
  };

  boardProps = () => {
    const { boardEntries } = this.state;
    return {
      handleEntry: this.handleEntry,
      boardEntries: boardEntries,
    };
  };

  finishBoardProps = () => {
    return {
      winner: this.getWinner(),
      restartApp: this.restartApp,
    };
  };

  render() {
    const { finished } = this.state;
    return (
      <div style={styles.gridContainer}>
        <Title>Tic-Tac-Toe Game</Title>
        <Layout>
          {finished ? <FinishBoard {...this.finishBoardProps()} /> : null}
          <Board {...this.boardProps()} />
        </Layout>
        <SideBar {...this.sideBarProps()} />
        <Footer />
      </div>
    );
  }
}

export default App;
