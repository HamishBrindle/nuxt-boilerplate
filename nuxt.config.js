const pkg = require('./package');

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ff0000' },

  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/element-ui'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  styleResources: {
    scss: [
      'assets/styles/abstracts/_functions.scss',
      'assets/styles/abstracts/_mixins.scss',
      'assets/styles/abstracts/_variables.scss',
    ],
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    analyze: true,
    babel: {
      presets: ['@nuxt/babel-preset-app'],
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          },
        ],
      ],
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
