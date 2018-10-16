import React, { Component } from 'react';
import './index.css';

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <form onSubmit="">
          <input type="text" name="city" placeholder="city..." />
          <input type="text" name="country" placeholder="Country..." />
          <input type="submit" value="Get Weather" />
        </form>
      </div>
    );
  }
}

export default Form;
