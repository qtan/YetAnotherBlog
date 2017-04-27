import React, { Component } from 'react'
import TutorialList from './TutorialList'
import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div className="flex-container">
        <div className="left-panel">
          <TutorialList />
        </div>
        <div className="right-content">
          <div className="markdown">
          </div>
        </div>
      </div>
    );
  }
}

export default App;

