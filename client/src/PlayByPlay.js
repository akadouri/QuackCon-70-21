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
      data: []
    };
  }

  componentDidMount() {
    var playbyplay = require('./play_by_play.json')
    this.setState({data: playbyplay.quarters[3].pbp[0].actions}, function() {
      //console.log(this.state.data) used to check data was being pushed to state
    })

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
        <p style={{fontSize:'20', color:'#212121', margin:'0 5px 0 5px'}}>PlayByPlay - Current Drive - SEA</p>
        {this.state.data.map(function(play) {
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
