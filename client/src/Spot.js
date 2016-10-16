import React, { Component, PropTypes } from 'react';
var ReactPlayer = require('react-player')
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { ItemTypes } from './Constants';
var Social = require('./Social');
import PlayByPlay from './PlayByPlay';
var PlayersOnField = require('./PlayersOnField');
var Chat = require('./Chat');
import DragButton from './DragButton';

const spotTarget = { // See: https://gaearon.github.io/react-dnd/docs-drop-target.html
  canDrop(props) {
    return true; // TODO: Check if the space is available
  },
  drop(props, monitor, component) {
      // Obtain the dragged item
      const item = monitor.getItem();
      //console.log(item);
      //console.log("shit");
      // You can do something with it
      component.setState({id: item.id});

      // You can also do nothing and return a drop result,
      // which will be available as monitor.getDropResult()
      // in the drag source's endDrag() method
      return { id:item.id };
  }
  // TODO: Make a drop method to swap around modules
};

function collect(connect, monitor) { // See: https://gaearon.github.io/react-dnd/docs-drop-target-connector.html
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    result: monitor.getDropResult()
  };
}

function fillSpot(i) {
  console.log(i);
  if (i==0) { return (<div>
                        <ReactPlayer url='http://localhost:3000/videoplayback.mp4' playing width='100%' height='648px' />
                        <img src="./img/logo_game_grid.png" height="34px" style={{marginTop:'20px'}} />
                        <img src="./img/nfl_logo.png" height="50px" style={{marginTop:'10px'}}/>
                        <DragButton id='0' text='Player' /><DragButton id='1' text='Social' /><DragButton id='2' text='PlayByPlay' /><DragButton id='3' text='PlayersOnField' />
                      </div>);}
  if (i==1) { return (<Social />);}
  if (i==2) { return (<PlayByPlay />);}
  if (i==3) { return (<PlayersOnField />);}
  if (i==4) { return (<Chat />)};
  return (<div></div>);
}

class Spot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: props.id};
  }
  clearChild() {
    this.child = (<div></div>);
  }
  render() {
    const { id, connectDropTarget, canDrop, result} = this.props;
    var useNew = false;
    //console.log("ID:"+id);
    //console.log("RESULT:"+result);
  //  var toUse = (useNew) ? result.id : id;
    let backgroundColor = "#222";
    if (canDrop) {
      backgroundColor = 'darkgreen';
    } else {
      backgroundColor = 'darkred';
    }
    return connectDropTarget(
      <div style={{display:'inline', backgroundColor}}>
        {fillSpot(this.state.id)}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.MODULE, spotTarget, collect)(Spot);
