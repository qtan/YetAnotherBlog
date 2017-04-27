import React from 'react'

import TutorialSubList from './TutorialSubList'

import '../styles/Tutorials.css'


class TutorialList extends React.Component {
  renderSubList (allMenuContent) {
    return allMenuContent.map(v => <TutorialSubList key={v.title} content={v} />)
  }

  render () {
    const allMenuContent = [
      {
        title: '某个分类',
        items: [
          {
            title: '入门教程',
            content: 'some',
            items: [
              {
                title: '第一步 新建应用',
                content: 'some'
              },
              {
                title: '添加交互链接',
                content: 'some'
              },
              {
                title: '预览圆形',
                content: 'some'
              }
            ]
          },
          {
            title: '进阶教程',
            content: 'some-blog-id', // items 没有或者为空的话要有
            items: [
              {
                title: '母板是什么',
                content: 'some'
              },
              {
                title: '如何用母版下拉菜单',
                content: 'some'
              },
            ]
          },
          {
            title: '工作流',
            content: 'some',
            items: []
          }
        ]
      },
      {
        title: '进阶引导',
        items: [
          {
            title: '进阶母版',
            content: 'some',
            items: []
          },
          {
            title: '进阶组件库',
            content: 'some',
            items: [
              {
                title: '进阶组件库 sub 1',
                content: 'some'
              },
              {
                title: '进阶组件库 sub 2',
                content: 'some'
              }
            ]
          },
          {
            title: '进阶工作流',
            content: 'some',
            items: []
          }
        ]
      }
    ]

    return (
      <div>
        {this.renderSubList(allMenuContent)}
      </div>
    )
  }

}

export default TutorialList;