var React = require('react');
var ReactPlayer = require('react-player')

class App extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=jIygo3bIVmo' playing />
      </div>
    );
  }
}

module.exports = App;
