import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '屈桓语的小站',
  description: '屈桓语的小站',
  base: './',
  head: [
    ["link",{rel: "stylesheet",href:"/css/index.css"}]
  ],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    sidebar: [
      {
        text: '三岁生日',
        link: '/post/birthday',
      },
    ]
  }),
})