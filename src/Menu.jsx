import React from 'react';

class Menu extends React.Component {
  InputNChange(event) {
    this.props.updateInputN(event.target.value);
  }
  InputMChange(event) {
    this.props.updateInputM(event.target.value);
  }

  render() {
    let wrong;
    if (this.props.wrongI !== 0) wrong = <div className="wrongInput">Wrong Input</div>;
    return (
      <div className="Menu">
        <p>Game of Matches</p>
        <button
          onClick={() => {
            this.props.updateScreen(1);
          }}>
          You go first
        </button>
        <button
          onClick={() => {
            this.props.updateScreen(2);
          }}>
          AI go first
        </button>
        <div className="input">
          <span>Number of matches(N):</span>
          <input
            defaultValue="12"
            onChange={this.InputNChange.bind(this)}
            onClick={() => {
              this.props.updateWrongI(0);
            }}></input>
          <span className="info">(2n + 1)</span>
        </div>
        <div className="input">
          <span>Maximum per turn(M):</span>
          <input
            defaultValue="3"
            onChange={this.InputMChange.bind(this)}
            onClick={() => {
              this.props.updateWrongI(0);
            }}></input>
        </div>
        {wrong}
      </div>
    );
  }
}

export default Menu;
