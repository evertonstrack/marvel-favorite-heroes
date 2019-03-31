import React, { Component } from 'react';
import './error.scss';

export class Error extends Component {

  render() {

    if (this.props.hasError) {
      
      return (
        <div className="error">
          <h3>Sorry Something went wrong!</h3>
          <p>Try again leter.</p>
        </div>
      );
    }

    return this.props.children; 
  }
}