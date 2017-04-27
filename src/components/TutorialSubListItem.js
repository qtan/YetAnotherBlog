import React from 'react'
import '../styles/Tutorials.css'

class TutorialSubListItem extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    items: React.PropTypes.object,
    dispath: React.PropTypes.func
  }

  constructor (props) {
    super(props)
    this.state = { isShownItems: true }
  }

  renderItem () {
    const { content: {items} } = this.props
    return items.map((v) => {
      return (
        <div key={v.title} className="left-indentation item">{v.title}</div>
      )
    })
  }

  handleClick () {
    this.setState({ isShownItems: !this.state.isShownItems})
  }

  render () {
    const { content: { title, items } } = this.props
    const { isShownItems } = this.state
    return (
      <div key={title}>
        <div className="item" onClick={() => {this.handleClick()}}>{isShownItems ? '⬇️ ️' : '➡️️ '}{title}</div>
        {items && isShownItems ? this.renderItem() : null}
      </div>
    )
  }
}

export default TutorialSubListItem