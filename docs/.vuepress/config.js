module.exports = {
  title: 'Vuepress-Support',
  base: '/vuepress-support/',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-132988469-1',
      }
    ]
  ],
  themeConfig: {
    nav: [
        {text: 'Home', link: '/'},
        {text: 'Demo', link: '/demo/'},
        {text: 'About', link: '/about/'},
        {text: 'Github', link: 'https://github.com/ludanxer/vuepress-support'}
    ],
    sidebar: {
       '/demo/': [
         {
           title: 'Demo',
           children: [
             ''
           ]
         }
       ]
    }
  },
}