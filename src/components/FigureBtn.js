import React, { Component } from 'react';

const styles = {
  fgBtn: {
    fontSize: '1.3rem',
    width: '20%',
    minHeight: '40px',
    backgroundColor: 'transparent',
    color: '#cfdbe8',
    border: '2px solid #cfdbe8',
    cursor: 'pointer',
  },
  fgBtnClicked: {
    backgroundColor: 'rgba(238, 238, 238, 0.2)',
  },
  fgBtnSelected: {
    backgroundColor: 'rgba(238, 238, 238, 0.5)',
  },
};

export default class FigureBtn extends Component {
  btnProps = (stylesBtn) => {
    const { value, clicked, selected, fgClicked } = this.props;
    return {
      style: { ...stylesBtn },
      onClick: (e) => {
        e.preventDefault();
        fgClicked({ value, clicked, selected });
      },
    };
  };
  render() {
    const { value, clicked, selected } = this.props;
    const { fgBtn, fgBtnClicked, fgBtnSelected } = styles;
    let stylesBtn = { ...fgBtn };
    if (clicked) stylesBtn = { ...stylesBtn, ...fgBtnClicked };
    if (selected) stylesBtn = { ...stylesBtn, ...fgBtnSelected };
    return <button {...this.btnProps(stylesBtn)}>{value}</button>;
  }
}
