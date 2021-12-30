export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '【特別企画】新春ロケリみくじ - ロケットリーグ 日本コミュニティ',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '新しい年も、ロケットリーグとともに！今年の運勢は？ロケリみくじで今年の運勢を占おう！',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content:
          '【特別企画】新春ロケリみくじ - ロケットリーグ 日本コミュニティ',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://fortune.rl-japan.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          '【特別企画】新春ロケリみくじ - ロケットリーグ 日本コミュニティ',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '新しい年も、ロケットリーグとともに！今年の運勢は？ロケリみくじで今年の運勢を占おう！',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://fortune.rl-japan.com/assets/ogp.png',
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/adobe-fonts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    fallback: true,
    routes() {
      return Array.from(Array(1024).keys()).map((item) => {
        return `pick/${item + 1}`
      })
    },
  },
}
