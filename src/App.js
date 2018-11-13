import React, { Component } from 'react'
import Footer from './footer'
import Nav from './nav'
import Herd from './herd'

class App extends Component {
  render() {
    return (
      <div id="container">
        <Nav />
        <Herd />
        <Footer />
      </div>
    )
  }
}

export default App
