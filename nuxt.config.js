import webpack from 'webpack'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tugas-harian',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css'},
      { rel: 'stylesheet', href: 'https://getbootstrap.com/docs/5.3/assets/css/docs.css'}
    ],
    scripts: [
      {src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', body: true, integrity: 'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo', crossorigin: 'anonymous'},
      {src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js', body: true },
      {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js', body: true }
      
    ]
  },
  ssr: true,
  loading: {
    color: 'red',
    height: '10px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',         // Bootstrap CSS
    'bootstrap-vue/dist/bootstrap-vue.css'     // BootstrapVue CSS
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/bootstrap-vue.js', ssr: false }  // Plugin BootstrapVue
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ]
  }
}
