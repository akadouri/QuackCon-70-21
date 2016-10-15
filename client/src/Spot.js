import React, { Component, PropTypes } from 'react';
var ReactPlayer = require('react-player')
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { ItemTypes } from './Constants';
var Social = require('./Social');
var PlayByPlay = require('./PlayByPlay');
var PlayersOnField = require('./PlayersOnField');

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

function fillSpot(i) {
  console.log(i);
  if (i==0) { return (<ReactPlayer url='https://www.youtube.com/watch?v=jIygo3bIVmo' playing width='100%' height='648px' />);}
  if (i==1) { return (<Social />);}
  if (i==2) { return (<PlayByPlay />);}
  if (i==3) { return (<PlayersOnField />);}
  return (<div></div>);
}

class Spot extends React.Component {
  clearChild() {this.child = (<div></div>);}
  render() {
    const { id, connectDropTarget } = this.props;

    return (
      <div>
        {fillSpot(id)}
      </div>
    );
  }
}

/*Spot.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};*/

export default DropTarget(ItemTypes.MODULE, spotTarget, collect)(Spot);
