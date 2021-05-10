module.exports = {
  lintOnSave: false,
  devServer: {
    open: true 
  },
  configureWebpack: (config) => {
    config.devtool = "source-map"
  }, 
  css: {
    sourceMap: true,
  }
}
