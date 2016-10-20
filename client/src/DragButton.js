import React, { Component, PropTypes } from 'react';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const dragbuttonSource = {
  beginDrag(props) {
    return { id: props.id };
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

class DragButton extends React.Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <button style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 12,
        fontWeight: 'bold',
        cursor: 'move',
        border: '1px solid #CFD8DC',
        display: 'inline',
        backgroundColor: '#CFD8DC',
        verticalAlign: 'top'
      }}>
        <p style={{fontSize:'20', color:'#757575'}}>{this.props.text}</p>
      </button>
    );
  }
}

/*PlayByPlay.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};*/

export default DragSource(ItemTypes.MODULE, dragbuttonSource, collect)(DragButton);
