import React, { Component } from 'react'
import TutorialList from './TutorialList'
import DefaultTutorial from './DefaultTutorial'
import { mockMenuData, mockTutorialData } from './data'
import '../styles/App.css'

class App extends Component {
  render () {
    return (
      <div className="flex-container">
        <div className="left-panel">
          <TutorialList data={mockMenuData}/>
        </div>
        <div className="right-content">
          <div className="markdown">
            <DefaultTutorial data={mockTutorialData}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

