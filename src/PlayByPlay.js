import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const playbyplaySource = {
  beginDrag(props) {
    return {};
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
      console.log(this.state.data)

    })
  }

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 15,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
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

PlayByPlay.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.PLAYBYPLAY, playbyplaySource, collect)(PlayByPlay);
