import React, { Component } from 'react'

class Nav extends Component {
  render() {
    return (
      <nav>
        <img src="images/logo.png" alt="github logo" />
        <ul>
          <li>
            <a href="#">RSS</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Back to GitHub</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
