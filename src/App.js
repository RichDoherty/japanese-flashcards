import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import Toolbar from './Toolbar';
import Footer from './Footer';
import Hiragana from '../scripts/Hiragana.json';
import Katakana from '../scripts/Katakana.json';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      showAnswer: false,
      initialCharacter: '',
      frontOfCards: 'japanese',
      category: 'hiragana',
      hiragana: Hiragana,
      katakana: Katakana,
      correct: 0,
      incorrect: 0,
      levels: []
    }
  }

  componentDidMount() {
      this.setState({ initialCharacter: this.random() });
  }

  random() {
    if(this.state.category === 'hiragana') {
      const keys = Object.keys(this.state.hiragana);
      const randIndex = Math.floor(Math.random() * keys.length);
      const randKey = keys[randIndex];
      const letter = this.state.hiragana[randKey];
      return letter;
    }
    else if(this.state.category === 'katakana') {
      const keys = Object.keys(this.state.katakana);
      const randIndex = Math.floor(Math.random() * keys.length);
      const randKey = keys[randIndex];
      const letter = this.state.katakana[randKey];
      return letter;
    }
  }

  next() {
    if(this.state.showAnswer === true) {
      this.setState({ showAnswer: false });
    }
      this.setState({ initialCharacter: this.random() });
  }

  correctButtonClick() {
    this.setState({ correct: this.state.correct + 1 });
    this.next();
  }

  incorrectButtonClick() {
    this.setState({ incorrect: this.state.incorrect + 1 });
    this.next();
  }

  textToDisplay() {
    if(this.state.frontOfCards === 'japanese') {
      if(this.state.showAnswer === false) {
        return this.state.initialCharacter.japanese;
      }
      else if(this.state.showAnswer === true) {
        return this.state.initialCharacter.english;
      }
    }
    if(this.state.frontOfCards === 'english') {
      if(this.state.showAnswer === false) {
        return this.state.initialCharacter.english;
      }
      else if(this.state.showAnswer === true) {
        return this.state.initialCharacter.japanese;
      }
    }
  }

  flipCard() {
    if(this.state.showAnswer === false) {
      this.setState({ showAnswer: true });
    }
    else if(this.state.showAnswer === true) {
      this.setState({ showAnswer: false });
    }
  }

  /*https://stackoverflow.com/questions/34687091/can-i-execute-a-function-after-setstate-is-finished-updating*/
  categoryDropDown(e) {
    this.setState({ category: e.target.value },
      ()=> {this.setState({ initialCharacter: this.random() })});
    if(this.state.showAnswer === true) {
      this.setState({ showAnswer: false });
    }
  }

  frontDropDown(e) {
    this.setState({ frontOfCards: e.target.value });
    if(this.state.showAnswer === true) {
      this.setState({ showAnswer: false });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Toolbar  category={this.state.category}
                    correct={this.state.correct}
                    incorrect={this.state.incorrect}
                    frontOfCards={this.state.frontOfCards}
                    next={() => this.next()}
                    categoryDropDown={this.categoryDropDown.bind(this)}
                    frontDropDown={this.frontDropDown.bind(this)} />
          <Container  hiragana={this.state.hiragana}
                      katakana={this.state.katakana}
                      showAnswer={this.state.showAnswer}
                      initialCharacter={this.state.initialCharacter}
                      random={() => this.random()}
                      textToDisplay={() => this.textToDisplay()}
                      flipCard={() => this.flipCard()}
                      correctButtonClick={() => this.correctButtonClick()}
                      incorrectButtonClick={() => this.incorrectButtonClick()} />
        </div>
        
      </div>
    );
  }
}

export default App;
