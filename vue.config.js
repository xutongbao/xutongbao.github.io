module.exports = {
  lintOnSave: false,
  devServer: {
    open: true 
  },
  outputDir: "docs",
  configureWebpack: (config) => {
    config.devtool = "source-map"
  }, 
  css: {
    sourceMap: true,
  }
}
