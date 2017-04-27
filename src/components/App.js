import React, { Component } from 'react';
import '../styles/App.css';
import TutorialList from './TutorialList'


class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="left-panel">
        <TutorialList />
        </div>
        <div className="right-content">
          <div className="markdown">
            Rich Text Document Here!
          </div>
        </div>
      </div>
    );
  }
}

export default App;

