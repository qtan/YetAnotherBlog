import React from 'react'
import TutorialSubList from './TutorialSubList'
import '../styles/Tutorials.css'

class TutorialList extends React.Component {
  renderSubList () {
    const { data } = this.props
    return data.map(v => <TutorialSubList key={v.title} content={v} />)
  }

  render () {
    return (
      <div>
        {this.renderSubList()}
      </div>
    )
  }

}

export default TutorialList;