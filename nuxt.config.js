export default {
  server: {
    port: 8089, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  telemetry: false,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#409eff', height: '4px' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/common.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    // ... 需要什么配置什么，这里是全局的
    // sass: [],
    scss: ['@/assets/css/public/_color.scss']
    // less: [],
    // stylus: []
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/api', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api': {
      target: 'http://localhost:8089', // 目标接口域名
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },
  router: {
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'error',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   })
    // }
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/',
          redirect: {
            name: 'home'
          }
        },
        {
          name: 'error',
          path: '*',
          component: resolve(__dirname, 'layouts/error.vue')
        }
      )
    }
  }
}
