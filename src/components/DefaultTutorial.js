import React from 'react'
import '../styles/Tutorials.css'
import VideoCard from './VideoCard'

class DefaultTutorial extends React.Component {
  renderVideoCards () {
    const { data } = this.props
    return data.videos.map(e => <VideoCard key={e.title} video={e} />)
  }

  renderTutorialList () {

  }

  render () {
    return (
      <div className="default-tutorial-container">
        <div className="tutorial-section">
          <h2 className="tutorial-section-title">推荐视频教程</h2>
          <div className="video-cards">
            {this.renderVideoCards()}
          </div>
        </div>
        <div className="tutorial-section">
          <h2 className="tutorial-section-title">精选文档教程</h2>
          {this.renderTutorialList()}
        </div>
      </div>
    )
  }

}

export default DefaultTutorial;