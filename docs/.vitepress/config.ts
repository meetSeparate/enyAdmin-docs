import { defineConfig } from "vitepress";

export default defineConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'EnyAdmin',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/meetSeparate/enyAdmin-docs' }
      // { icon: 'twitter', link: 'https://twitter.com/kogawananari' }
    ],
    sidebar: {
      '/dart/': [{
        text: '前置准备',
        items: [
          { text: '安装node', link: '/dart/' },
          { text: '使用说明', link: '/dart/使用说明' },
          { text: '数据类型', link: '/dart/数据类型' },
          { text: '函数', link: '/dart/函数' },
          { text: '类', link: '/dart/类' },
          { text: '异步', link: '/dart/异步' },
        ]
      }, {
        text: 'Flutter',
        items: [
          { text: '安装环境', link: '/dart/flutter/' },
        ]
      }],
      '/elixir/': [{
        text: '语言特性',
        items: [
          { text: '安装elixir', link: '/elixir/' },
        ]
      }]
    },
    nav: [
      { text: '飞镖', link: '/dart/', activeMatch: '/dart/' },
      { text: '长生不老药', link: '/elixir/', activeMatch: '/elixir/' },
    ],
  }
})