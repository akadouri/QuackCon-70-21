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
        //console.log(data)
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render () {
    return (
      <div>
        <p>test2</p>
      </div>
    );
  }
}

module.exports = Social;
