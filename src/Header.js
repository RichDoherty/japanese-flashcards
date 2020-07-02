import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header id="header">
          <div className="group">
            <a href="" className="logo">
              {/* <img src="/img/logo.png" alt="https://www.freepik.com/free-photos-vectors/logo>Logo vector created by sentavio - www.freepik.com" className="main-logo"/> */}
              <div className="header-name">
                <h1 className="desktop-h1">Hiragana & Katakana Flashcards</h1>
                <h1 className="mobile-h1">Hiragana & Katakana</h1>
                <h2>ひらがな　＆　カタカナ</h2>
              </div>
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
