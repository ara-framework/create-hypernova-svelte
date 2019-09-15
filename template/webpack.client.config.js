const path = require('path')

module.exports = {
  target: 'web',
  node: {
    fs: 'empty',
    module: 'empty'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            generate: 'dom',
            hydratable: true
          }
        }
      }
    ]
  }
}
