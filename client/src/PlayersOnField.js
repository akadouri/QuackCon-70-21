var React = require('react');

class PlayersOnField extends React.Component {
  componentDidMount() {
    var seahawks = require('./seahawks_roster.json');
    var greenbay = require('./greenbay_roster.json');
  }
  
  render() {
    return (
      <p>A player is on the field</p>
    );
  }
}

module.exports = PlayersOnField;
