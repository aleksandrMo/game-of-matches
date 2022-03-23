import React from 'react';

class Menu extends React.Component {
  result() {
    var w = 'AI';
    if (this.props.who % 2 === 0) w = 'You';
    return w;
  }

  render() {
    return (
      <div className="Result">
        <div className="exit" onClick={() => this.props.exit()}>
          X
        </div>
        <p className="who">{this.result()}</p>
        <p>Wins!</p>
      </div>
    );
  }
}

export default Menu;
