import React, { Component } from 'react';
import './App.css';
import Form  from './components/form'
import Header  from './components/header'
import Title  from './components/title'
import Weather  from './components/weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Title />
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <Form />
              <div className="row">
                <div className="col-md-12">
                  <Weather />
                      </div>
                    </div>
                  </div>
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
