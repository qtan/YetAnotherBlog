import React from 'react'
import '../styles/Tutorials.css'

class TutorialSubListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isShownItems: true }
  }

  renderItem () {
    const { content: { items } } = this.props
    return items.map(v => <div key={v.title} className="left-indentation item">{v.title}</div>)
  }

  handleClick () {
    this.setState({ isShownItems: !this.state.isShownItems })
  }

  render () {
    const { toggleable, content: { title, items } } = this.props
    const { isShownItems } = this.state
    return (
      <div key={title}>
        <div className="item" onClick={() => {toggleable && this.handleClick()}}>{isShownItems ? '⬇️ ️' : '➡️️ '}{title}</div>
        {items && isShownItems ? this.renderItem() : null}
      </div>
    )
  }
}

TutorialSubListItem.propTypes = {
  content: React.PropTypes.object,
  toggleable: React.PropTypes.bool
}

export default TutorialSubListItem