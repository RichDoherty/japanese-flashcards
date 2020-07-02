import React, { Component } from 'react';
import './Flashcards.css';

class Flashcards extends Component {
  render() {
    return (
        <div className="card">
          <a href="#" onClick={() => this.props.flipCard()}>
            <div className="card-content"><p>{this.props.textToDisplay()}</p></div>
          </a>
        </div>
    )
  }
}

export default Flashcards;
