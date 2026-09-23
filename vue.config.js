
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // Fix Invalid Host header error (webpack-dev-server v4+)
    // `disableHostCheck` was removed; use `allowedHosts: 'all'` to permit external hosts
    allowedHosts: 'all',
  }
})
