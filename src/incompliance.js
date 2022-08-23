import React, { Component } from 'react'

class Image extends React.Component {
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.forceUpdate(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
  
    render() {
      return (
        <img src={require("./image/pic.jpg")} />
      );
    }
  }
  export default Image