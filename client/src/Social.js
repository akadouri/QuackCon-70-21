import React, { Component, PropTypes } from 'react';
import Tweet from 'react-tweet'

class Social extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.statuses});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render () {
    return (
      <div style={{height:'670.907px',
                  width:'100%',
                  overflow:'scroll',
                  margin: '0 8px 0 8px'}}>
        {this.state.data.map(function(tweet) {
          return (
            <Tweet data={tweet} />
          );
        })}
       </div>
    );
  }
}

module.exports = Social;
