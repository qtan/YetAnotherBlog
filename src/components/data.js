export const mockMenuData = [
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

export const mockTutorialData = {
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
  ],
  articles: [
    {
      category: '分类一',
      items: [
        {
          title: '标题标题标题标题标题',
          category: '分类一',
          post_id: 'some',
          url: 'some'
        },
        {
          title: '标题标题标题标题标题',
          category: '分类一',
          post_id: 'some',
          url: 'some'
        },
        {
          title: '标题标题标题标题标题',
          category: '分类一',
          post_id: 'some',
          url: 'some'
        },
        {
          title: '标题标题标题标题标题',
          category: '分类一',
          post_id: 'some',
          url: 'some'
        }
      ]
    },
    {
      category: '分类二',
      items: [
        {
          title: '标题标题标题标题标题',
          category: '分类二',
          post_id: 'some',
          url: 'some'
        },
        {
          title: '标题标题标题标题标题',
          category: '分类二',
          post_id: 'some',
          url: 'some'
        },
        {
          title: '标题标题标题标题标题',
          category: '分类二',
          post_id: 'some',
          url: 'some'
        }
      ]
    }
  ]
}
