import React, { Component, PropTypes } from 'react';
var ReactPlayer = require('react-player')
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { ItemTypes } from './Constants';

const spotTarget = { // See: https://gaearon.github.io/react-dnd/docs-drop-target.html
  canDrop(props) {
    return true; // TODO: Check if the space is available
  }
  // TODO: Make a drop method to swap around modules
};

function collect(connect, monitor) { // See: https://gaearon.github.io/react-dnd/docs-drop-target-connector.html
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Spot extends React.Component {
  clearChild() {
    this.child = (<div></div>);
  }
  render() {
    const { child, connectDropTarget } = this.props;

    return (
      <div style={{display:'inline'}}>
        {child}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.MODULE, spotTarget, collect)(Spot);
