import React, { Component } from 'react';
var ReactPlayer = require('react-player')
import PlayByPlay from './PlayByPlay'
var PlayersOnField = require('./PlayersOnField')
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Spot from './Spot'
var Social = require('./Social');


class App extends React.Component {

  /*function getWid(i) {
    if (i > 0) { // Only the first spot (video) is wider than the others
      return '33.33%';
    }
    return '66.66%';
  }
  function getHei(i) {
    if (i < 2) { // The first two spots are taller, the last 3 are just squares
      return '66.66%';
    }
    return '33.33%';
  }*/
  renderSpots(i) {
    const wid = (i>0) ? '33.33%' : '66.66%';//getWid(i); // Do constants need to be initialized when they're declared?
    const hei = (i<2) ? '66.66%' : '33.33%';//getHei(i); // I don't remember and I don't care anymore

    return (
      <div key={i} style={{width: wid, height: hei}}> // Set the size of the div to contain the Spot
        <Spot /> // Spot will fill all the space it can, so the entire parent div
      </div>
    );
  }

  render() {
    const spots = []; // Using an array to hold all spots
    for (let i = 0; i < 5; i++) {
      spots.push(this.renderSpots(i)); // Spots will be sized by the renderSpots method
    }
    // Then we wrap all the spots into one big div
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {spots}
        <PlayByPlay />
        <Social />
      </div>
    );
  }
  /*
  render() {
    return (
      <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=jIygo3bIVmo' playing />
        <PlayByPlay />
        <PlayersOnField />
      </div>
    );
  }*/
}

export default DragDropContext(HTML5Backend)(App);
