import React, { Component } from 'react';
import Flashcards from './Flashcards';
import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className="card-container">
        <Flashcards hiragana={this.props.hiragana}
                    katakana={this.props.katakana}
                    showAnswer={this.props.showAnswer}
                    initialCharacter={this.props.initialCharacter}
                    random={() => this.props.random()}
                    textToDisplay={() => this.props.textToDisplay()}
                    flipCard={() => this.props.flipCard()} />
        <div className="result-buttons">
          <div className="result-buttons correct-button">
            <button onClick={this.props.correctButtonClick}>✔</button>
          </div>
          <div className="result-buttons incorrect-button">
            <button onClick={this.props.incorrectButtonClick}>✘</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Container;
