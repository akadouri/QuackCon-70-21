var React = require('react');
var ReactPlayer = require('react-player')
var PlayByPlay = require('./PlayByPlay')

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=jIygo3bIVmo' playing />
        <PlayByPlay />
      </div>
    );
  }
}

module.exports = App;
