import React from 'react'
import '../styles/Tutorials.css'

class VideoCard extends React.Component {
  render () {
    const { video: { video_url, thumbnail, title } } = this.props

    return (
      <div className="video-card">
        <div className="video-image">{thumbnail}</div>
        <div className="video-title">{title}</div>
        <div className="video-play-layer">{video_url}</div>
      </div>
    )
  }
}

VideoCard.PropTypes = {
  video: React.PropTypes.object
}

export default VideoCard;