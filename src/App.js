import React, { Component } from 'react';
import './App.css';
import Form  from './components/form'
import Header  from './components/header'
import Title  from './components/title'
import Weather  from './components/weather'

class App extends Component {
  constructor(){
    super();
    this.state = {
      city: '',
      country: '',
      temperature: 0,
      humidity: 0,
      description: '',
      error: ''
    }

  }

  getWeather = async(e) => {
    //grab info, don't refesh page
    e.preventDefault();

    //grab informaation from Form
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    console.log(city, ', ', country);
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Title />
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <Form getWeather={this.getWeather}/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Weather city={this.state.city}
                  country={this.state.country}
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          );
        }
      }

      export default App;
