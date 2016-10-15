var React = require('react');

class PlayByPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    var playbyplay = require('./play_by_play.json')
    this.setState({data: playbyplay.quarters[3].pbp[0].actions}, function() {
      console.log(this.state.data)

    })
  }

  render() {
    var style = {
      color:'white'
    }
    return (
      <div style={style}>
        <p>This Drive - PlayByPlay</p>
        {this.state.data.map(function(play) {
          return (
              <p>{play.clock}-{play.summary}</p>
          );
        })}
      </div>
    );
  }
}

module.exports = PlayByPlay;
