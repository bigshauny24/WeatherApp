import React, { Component } from 'react';
import './index.css';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <h3>City: {this.props.city}</h3>
        <h3>Country: {this.props.country}</h3>
        <h3>Temperature: {this.props.temperature}&deg;</h3>
        <h3>Humidity: {this.props.humidity}%</h3>
        <h3>Description: {this.props.description}</h3>
        {
          this.props.error && <h3>Error: {this.props.error}</h3>
        }
      </div>
    );
  }
}

export default Weather;
