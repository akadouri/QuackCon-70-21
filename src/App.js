var React = require('react');
var ReactPlayer = require('react-player')
var PlayByPlay = require('./PlayByPlay')
var PlayersOnField = require('./PlayersOnField')

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=jIygo3bIVmo' playing />
        <PlayByPlay />
        <PlayersOnField />
      </div>
    );
  }
}

module.exports = App;
