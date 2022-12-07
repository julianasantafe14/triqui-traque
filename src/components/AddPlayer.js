import React, { Component } from 'react';
import FigureBtn from './FigureBtn';
const styles = {
  playerTitle: {
    fontSize: '1.6rem',
    textAlign: 'center',
  },
  textForm: {
    fontSize: '1.3rem',
    margin: '0.8rem 0',
  },
  createBtn: {
    fontSize: '1.3rem',
    width: '60%',
    minHeight: '40px',
    backgroundColor: 'transparent',
    color: '#cfdbe8',
    border: '2px solid #cfdbe8',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  nameInput: {
    // display: 'block',
    width: '97%',
    minHeight: '28px',
    outline: 'none',
    backgroundColor: 'transparent',
    border: '2px solid #cfdbe8',
    color: '#cfdbe8',
    fontSize: '1.2rem',
    padding: '4px',
    margin: '0px auto',
  },

  btnSection: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    rowGap: '1.5rem',
  },
};

export default class AddPlayer extends Component {
  fgClicked = (fg) => {
    const { updateFgs } = this.props;
    if (fg.selected) return;
    if (!fg.clicked) {
      updateFgs(fg);
      return;
    }
    updateFgs();
  };

  setSelectedProp = () => {
    const { figuresBtn, currFgSelected } = this.props;
    return figuresBtn.map((fg) => {
      return fg.value === currFgSelected
        ? { ...fg, selected: true }
        : { ...fg };
    });
  };

  validator = (username, updateError) => {
    const { players } = this.props;
    const { currFgSelected } = this.props;
    if (currFgSelected === '') {
      updateError(`Error: You didn't select a figure`);
      return false;
    } else if (username === '') {
      updateError(`Error: You didn't enter an username`);
      return false;
    } else if (players[0] && username === players[0].name) {
      updateError(`Error: You entered a username that already exists. `);
      return false;
    }
    return true;
  };

  submitFunc = (player, createPlayer, updateError) => {
    const { currFgSelected, updateFgSelected } = this.props;
    const username = document.getElementById('name').value;
    //Making some validations in the form
    if (!this.validator(username, updateError)) return;
    const newPlayer = { ...player, figure: currFgSelected, name: username };
    document.getElementById('name').value = '';
    const newFgState = this.setSelectedProp();
    updateFgSelected(newFgState);
    createPlayer(newPlayer);
  };

  fgsProps = (fgBtn) => {
    return {
      ...fgBtn,
      fgClicked: this.fgClicked,
      key: fgBtn.value,
    };
  };

  btnSubmitProps = () => {
    const { players, createPlayer, i, updateError } = this.props;
    return {
      type: 'submit',
      style: styles.createBtn,
      onClick: (e) => {
        e.preventDefault();
        this.submitFunc(players[i], createPlayer, updateError);
      },
    };
  };

  render() {
    const { players, i, figuresBtn } = this.props;
    return (
      <form>
        <p style={styles.playerTitle}>Player {players[i].id + 1}</p>
        <p style={styles.textForm}>Name: </p>
        <input type='text' style={styles.nameInput} id='name' />
        <p style={styles.textForm}>Select your figure:</p>
        <div style={styles.btnSection}>
          {/*Render Figures in the Form*/}
          {figuresBtn.map((fg) => {
            return <FigureBtn {...this.fgsProps(fg)} />;
          })}
          <button {...this.btnSubmitProps()}>Create</button>
        </div>
      </form>
    );
  }
}
