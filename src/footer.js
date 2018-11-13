import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <a href="#">RSS</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <a href="https://github.com">
          <i class="fa fa-github fa-2x" aria-hidden="true" />
        </a>
        <p id="copyright">
          &#169; 2013 – 2018 GitHub, Inc. All rights reserved.
        </p>
      </footer>
    )
  }
}

export default Footer
