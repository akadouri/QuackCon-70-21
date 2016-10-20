import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const playbyplaySource = {
  beginDrag(props) {
    return { id: 2 };
  },
  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    if (dropResult) {
    }
}
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class PlayByPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      count: 0
    };
    this.timer;
  }

  componentDidMount() {
    var playbyplay = require('./play_by_play.json')
    this.setState({data: playbyplay.quarters[3].pbp[0].actions}, function() {
      //console.log(this.state.data) used to check data was being pushed to state
    })
    function update() {
      var temp = this.state.data2;
      temp.push(playbyplay.quarters[3].pbp[0].actions[this.state.count]);
      this.setState({count: this.state.count+1});
      this.setState({data2: temp});
      if(this.state.count == 4) {
        clearInterval(this.timer);
      }
    }
    update = update.bind(this);
    update();
    this.timer = setInterval(function() {
      update();
    }, 15000);
  }

  componentWillUnmount() {
    //kill the social interval timer
    clearInterval(this.timer);
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 15,
        fontWeight: 'bold',
        cursor: 'move',
        background:'#607D8B',
        padding:'8px',
        margin:'0 5px 5px 5px',
        marginRight: '20px'
      }}>
        <p style={{fontSize:'20', color:'#212121', margin:'0 5px 0 5px'}}>PlayByPlay - Current Drive - GB</p>
        {this.state.data2.map(function(play) {
          return (
              <p style={{color:'#212121'}}>{play.clock}-{play.summary}</p>
          );
        })}
      </div>
    );
  }
}

/*PlayByPlay.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};*/

export default DragSource(ItemTypes.MODULE, playbyplaySource, collect)(PlayByPlay);
