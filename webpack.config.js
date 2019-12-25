module.export = {
  entry: {
    IdoTimer: './src/ido-timer.js'
  },
  output: {
    path: __dirname + '/build',
    filename:[name].js,
    library:'IdoTimer',
    // 支持amd和cmd,并在window上挂载方法
    libraryTarget:'umd'
  }
}