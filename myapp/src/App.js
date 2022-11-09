
import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar.js'
import Header from './components/Header.js'
class App extends Component {

  render() {
    return (
      <>
      <NavBar logo="Tesla"></NavBar>
     <Header></Header>
      </>
    )
  }
}

export default App
// 1-100 random
// 0.59 *100 = 59