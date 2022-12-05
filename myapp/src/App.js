
import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar.js'
import Banner from './components/Banner.js'
import Feedback from './components/Feedback.js'
import Form from './components/Form.js'

class App extends Component {

  render() {
    return (
      <div>
        <NavBar logo="Tesla"></NavBar>
        <Banner></Banner>
        <Feedback></Feedback>
        <Form></Form>
      </div>
    )
  }
}

export default App
// 1-100 random
// 0.59 *100 = 59





