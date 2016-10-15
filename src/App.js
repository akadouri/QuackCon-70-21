import React, { Component } from 'react';
var ReactPlayer = require('react-player')
import PlayByPlay from './PlayByPlay'
var PlayersOnField = require('./PlayersOnField')
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class App extends React.Component {
  render() {
    return (
      <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=jIygo3bIVmo' playing />
        <PlayByPlay />
        <PlayersOnField />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
