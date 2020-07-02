import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
  constructor() {
    super()

    this.state = {
      active: false,
      options: ''
    }
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
    if(this.state.options === '') {
      this.setState({ options: 'Hide ' });
    }
    else {
      this.setState({ options: '' });
    }
  }

  render() {
    return (
      <div className="toolbar">
        <div className="toolbar-content">
          <a href="#" onClick={this.toggleClass.bind(this)}>
            <h3 className="options-h3">{this.state.options}Options</h3>
          </a>
        <div className={this.state.active ? null : 'dropdowns' }>
            <h3>Front of Card</h3>
            <select value={this.props.frontOfCards} onChange={this.props.frontDropDown} className="toolbar-select front-select">
              <option value='japanese'>Japanese (日本語)</option>
              <option value='english'>English (英語)</option>
            </select>
            <h3>Category</h3>
            <select value={this.props.category} onChange={this.props.categoryDropDown} className="toolbar-select">
              <option value='hiragana'>Hiragana</option>
              <option value='katakana'>Katakana</option>
            </select>
          </div>
          <h3 className="score">Score</h3>
          <div className="count-row">
            <div className="count" id="correct-count">
              <p>Correct</p>
              <span className="num num-correct">{this.props.correct}</span>
            </div>
            <div className="count" id="incorrect-count">
              <p>Incorrect</p>
              <span className="num num-incorrect">{this.props.incorrect}</span>
            </div>
          </div>
          <br />
          <button className="next-btn" onClick={() => { this.props.next() }}>Next</button>
        </div>
      </div>
    )
  }
}

export default Toolbar;
