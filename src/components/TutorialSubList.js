import React from 'react'

import TutorialSubListItem from './TutorialSubListItem'

import '../styles/Tutorials.css'

class TutorialSubList extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.array,
  }

  renderSubListItem () {
    const { content: { items } } = this.props
    return items.map(e => <TutorialSubListItem key={e.title} content={e} />)
  }

  render () {
    const { content: { title } } = this.props
    return (
      <div className="sub-list">
        <div className="sub-list-title">{title}</div>
        {this.renderSubListItem()}
      </div>
    )
  }
}

export default TutorialSubList