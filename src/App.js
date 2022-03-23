import React from 'react';
import Menu from './Menu.jsx';
import Game from './Game.jsx';
import Result from './Result.jsx';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: [0, 25, 0],
      checked: 1,
      maxM: 3,
      type: 0,
      wrongI: 0,
      game: 0,
    };
  }

  exit = () => {
    this.setState({ type: 0 });
    this.setState({ game: 0 });
    this.setState({ score: [0, 25, 0] });
    this.setState({ maxM: 3 });
    this.setState({ wrongI: 0 });
  };

  updateScreen = (value) => {
    if (this.state.game === 0) {
      if (this.state.score[1] > this.state.maxM && this.state.maxM > 0) {
        this.setState({ wrongI: 0 });
        this.setState({ score: [0, this.state.score[1], 0] });
        this.setState({ type: value });
        this.setState({ checked: 1 });
        if (this.state.maxM === 3) {
          this.setState({ game: 1 });
        } else {
          this.setState({ game: 2 });
        }
        if (value === 2) {
          this.setState({ checked: 0 });
        }
      } else {
        this.setState({ wrongI: 1 });
      }
    } else {
      this.setState({ type: value });
    }
  };

  updateInputN = (value) => {
    this.setState({ score: [0, parseInt(value, 10) * 2 + 1, 0] });
  };

  updateInputM = (value) => {
    this.setState({ maxM: parseInt(value, 10) });
  };

  updateWrongI = (value) => {
    this.setState({ wrongI: value });
  };

  updateScore = (AIScore, Total, YourScore) => {
    this.setState({ score: [AIScore, Total, YourScore] });
  };

  updateChecked = (value) => {
    this.setState({ checked: value });
  };

  render() {
    let screen;
    if (this.state.type === 0)
      screen = (
        <Menu
          updateScreen={this.updateScreen}
          updateInputN={this.updateInputN}
          updateInputM={this.updateInputM}
          updateWrongI={this.updateWrongI}
          wrongI={this.state.wrongI}
        />
      );
    if (this.state.type === 1 || this.state.type === 2) {
      screen = (
        <Game
          game={this.state.game}
          type={this.state.type}
          updateScreen={this.updateScreen}
          updateScore={this.updateScore}
          exit={this.exit}
          score={this.state.score}
          maxM={this.state.maxM}
          checked={this.state.checked}
          updateChecked={this.updateChecked}
          updateWrongI={this.updateWrongI}
          wrongI={this.state.wrongI}
        />
      );
    }
    if (this.state.type === 3) {
      screen = <Result exit={this.exit} who={this.state.score[2]} />;
    }
    return <div className="App">{screen}</div>;
  }
}

export default App;
