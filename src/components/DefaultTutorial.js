import React from 'react'
import '../styles/Tutorials.css'
import VideoCard from './VideoCard'

const mockData = {
  videos: [
    {
      id: 1,
      title: 'Video Title 1',
      thumbnail: 'IMAGE URL HERE',
      video_url: 'VIDEO URL HERE',
      updated_at: '1'
    },
    {
      id: 2,
      title: 'Video Title 2',
      thumbnail: 'IMAGE URL HERE',
      video_url: 'VIDEO URL HERE',
      updated_at: '2'
    },
    {
      id: 3,
      title: 'Video Title 3',
      thumbnail: 'IMAGE URL HERE',
      video_url: 'VIDEO URL HERE',
      updated_at: '3'
    },
    {
      id: 4,
      title: 'Video Title 4',
      thumbnail: 'IMAGE URL HERE',
      video_url: 'VIDEO URL HERE',
      updated_at: '4'
    },
    {
      id: 5,
      title: 'Video Title 5',
      thumbnail: 'IMAGE URL HERE',
      video_url: 'VIDEO URL HERE',
      updated_at: '5'
    }
  ]
}

class DefaultTutorial extends React.Component {
  renderVideoCards () {
    return mockData.videos.map(e => <VideoCard key={e.title} video={e} />)
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