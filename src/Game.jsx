import React from 'react';
import AILogic from './AILogic.js';

class Game extends React.Component {
  state = {
    inputC: 1,
  };

  AITurn() {
    var ai = AILogic(this.props.score[0], this.props.score[1], this.props.maxM);

    this.props.updateScore(this.props.score[0] + ai, this.props.score[1] - ai, this.props.score[2]);
    if (this.props.score[1] > 0) this.props.updateChecked(1);
    else this.props.updateScreen(3);
  }

  Add(n) {
    if (this.props.checked === 1) {
      this.props.updateWrongI(0);
      if (n > 0 && n <= this.props.maxM && n <= this.props.score[1]) {
        this.props.updateChecked(0);
        this.props.updateScore(
          this.props.score[0],
          this.props.score[1] - n,
          this.props.score[2] + n,
        );
        this.timerID = setTimeout(() => {
          if (this.props.score[1] > 0) this.AITurn();
          else this.props.updateScreen(3);
        }, 1000);
      } else this.props.updateWrongI(1);
    }
  }

  InputCChange(event) {
    this.setState({ inputC: parseInt(event.target.value, 10) });
  }

  componentDidMount() {
    if (this.props.type === 2) {
      this.props.updateScreen(1);
      this.timerID = setTimeout(() => this.AITurn(), 1000);
    }
  }

  render() {
    let buttons;
    if (this.props.game === 1) {
      buttons = (
        <div className="player-options">
          <button onClick={() => this.Add(1)}>1</button>
          <button onClick={() => this.Add(2)}>2</button>
          <button onClick={() => this.Add(3)}>3</button>
        </div>
      );
    } else {
      buttons = (
        <div className="player-more-options">
          <button onClick={() => this.Add(this.state.inputC)}>Взять</button>
          <input defaultValue="1" onChange={this.InputCChange.bind(this)}></input>
          <span>Maximum: {this.props.maxM}</span>
        </div>
      );
    }
    let wrong;
    if (this.props.wrongI !== 0) wrong = <div className="wrongInput">Wrong Input</div>;

    return (
      <div className="Game">
        <div className="exit" onClick={() => this.props.exit()}>
          X
        </div>
        <div className="tab ai">
          <div className="logo">&#128187;</div>
          <div className="count">{this.props.score[0]}</div>
        </div>
        <div className="tab box">
          <div className="logo">&#128081;</div>
          <div className="count">{this.props.score[1]}</div>
        </div>
        <div className="tab player">
          <div className="player-info">
            <div className="logo">&#128102;</div>
            <div className="count">{this.props.score[2]}</div>
          </div>
          {buttons}
          {wrong}
        </div>
      </div>
    );
  }
}

export default Game;
