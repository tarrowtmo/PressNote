import { defineConfig } from "vuepress/config";

export default defineConfig({
  lang: 'zh-cn',
  title: "Tarrowtmo's Notes",
  themeConfig: {
    logo: '/images/magic.jpeg',
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
      '/': ['']
    }
  }
})