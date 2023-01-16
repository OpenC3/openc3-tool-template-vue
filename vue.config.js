module.exports = {
  publicPath: '/tools/templatevue',
  outputDir: 'tools/templatevue',
  filenameHashing: false,
  transpileDependencies: ['vuetify'],
  devServer: {
    port: 2913,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    client: {
      webSocketURL: {
        hostname: 'localhost',
        pathname: '/tools/templatevue',
        port: 2913,
      },
    },
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .use('babel-loader')
      .tap((options) => {
        return {
          rootMode: 'upward',
        }
      })
    config.externals([
      'vue',
      'vuetify',
      'vuex',
      'vue-router',
    ])
  },
}
