import { defineConfig } from "vuepress/config";

export default defineConfig({
  lang: 'zh-cn',
  title: "Tarrowtmo's Notes",
  theme: 'reco',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // 主题 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: '/images/magic.jpeg',
    // 主题模式 博客模式
    type: 'blog',
    // 个人信息的头像
    authorAvatar: '/images/magic.jpeg',
    // 内置搜索
    search: true,
    searchMaxSuggestions: 10,
    // 子侧边栏
    // subSidebar: 'auto',
    // sidebarDepth: 1,
    // series: {
    //   '/vuepress-theme-reco/': [
    //     {
    //       text: '基础',
    //       children: [ 'introduce', 'usage' ],
    //       collapsible: true
    //     },
    //     {
    //       text: '高级',
    //       children: [ 'home', 'series', 'comments' ]
    //     }
    //   ]
    // },
    lastUpdated: '更新时间',
    // 设置时区偏移量（8小时）
    timezoneOffset: 8 * 60 * 60 * 1000,
    // 博客配置
    // blogConfig: {
    //   socialLinks: [
    //     { icon: 'reco-github', link: 'https://github.com/SongJian-99' }
    //   ]
    // },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'External', link: 'https://google.com' },
      // { 下拉
      //   text: 'Languages',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // }
    ],
    sidebar: {
      '/blog/': [
        'chapter1', 'chapter2',
      ],
      '/foo/': [
        {
          title: 'VuePress配置文档',
          collapsable: true,
          children: ['foo1', 'foo2']
        }
      ],
      // '/': ['']
    }
  },
  plugins: [
    ['@vuepress-reco/vuepress-plugin-pagation', {
        perPage: 5	// 每页展示条数
    }]
  ]
})