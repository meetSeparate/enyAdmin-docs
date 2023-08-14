
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
      { icon: 'github', link: 'https://github.com/nanarino' },
      { icon: 'twitter', link: 'https://twitter.com/kogawananari' }
    ],
    sidebar: {
      '/dart/': [{
        text: '语言特性',
        items: [
          { text: '安装dart', link: '/dart/' },
          { text: '基本语法', link: '/dart/基本语法' },
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