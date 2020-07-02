import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer id="contact">
        <div className="footer-content">
          <table id="desktop-footer">
            <tbody>
              <tr>
                <td>
                  <h3>Online</h3>
                  <a className="footer-link" href="https://github.com/RichDoherty" target="_blank">GitHub</a>
                </td>
                <td>
                  <h3>Contact</h3>
                  <p>richdoherty7@gmail.com</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table id="mobile-footer">
            <tbody>
              <tr>
                <td>
                  <h3>Online</h3>
                  <a className="footer-link" href="https://github.com/RichDoherty">GitHub</a>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Contact</h3>
                  <p>richdoherty7@gmail.com</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
    )
  }
}

export default Footer;
