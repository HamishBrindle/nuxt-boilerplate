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
  loading: { color: '#1e3570' },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/sentry',
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Style resources available app-wide
   */
  styleResources: {
    scss: [
      'assets/styles/abstracts/_functions.scss',
      'assets/styles/abstracts/_mixins.scss',
      'assets/styles/abstracts/_variables.scss',
    ],
  },

  /*
   ** Sentry.io configuration
   */
  sentry: {
    dsn: 'http://a7a98415996148828fef68422fd82294@localhost:9000/1',
    disabled: false,
    config: {
      attachProps: true,
    },
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    analyze: false,
    babel: {
      presets: ['@nuxt/babel-preset-app'],
      plugins: [
        ['component',
          {
            libraryName: 'element-ui',
            styleLibraryName: '~assets/styles/themes/element-ui',
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
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
