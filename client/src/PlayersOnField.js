var React = require('react');

class PlayersOnField extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sea_data: [],
      green_data: []
    };
  }

  componentDidMount() {
    var seahawks = require('./seahawks_roster.json');
    this.setState({sea_data: seahawks.players});
    var greenbay = require('./greenbay_roster.json');
    this.setState({green_data: greenbay.players});
  }

  render() {
    return (
      <div style={{display:'inline'}}>
        <div style={{
            width: '220px',
            height: '100%',
            float: 'left',
            background:'#607D8B',
            paddingLeft:'8px',
            marginLeft: '8px',
            overflow:'hidden'}}>
          <center>
            <img src="./img/seahawks_logo.png" width="50px" height="22px"/> Seahawks
          </center>
          {this.state.sea_data.map(function(player) {
            return (
              <p style={{fontSize:'15', color:'#212121'}}>{player.jersey_number} | {player.name_full} | {player.position}</p>
            );
          })}
        </div>
        <div style={{
          margin: '0 0 0 220px',
          height: '100%',
          background:'#607D8B',
          marginRight:'8px',
          overflow:'hidden'}}>
          <center>
            <img src="./img/greenbay_logo.png" width="30px" height="30px"/> Greenbay
          </center>
          <div style={{margin: '0 0 0 130px'}}>
            {this.state.green_data.map(function(player) {
              return (
                <p style={{fontSize:'15', color:'#212121'}}>{player.jersey_number} | {player.name_full} | {player.position}</p>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PlayersOnField;
