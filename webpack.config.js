var webpack = require('webpack')

module.exports = {
  devtool: 'sourcemap',

  entry: './src/index.js',

  output: {
    path: 'dist',
    filename: 'ics-js.js',
    library: 'ics-js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      mangle: true,
      output: {
        comments: false
      }
    })
  ]
}
