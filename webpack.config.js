var webpack = require("webpack");

module.exports = {
  entry: "./ICS.js",

  output: {
    path: __dirname,
    filename: "ICS.es5.min.js"
  },

  resolve: {
    modulesDirectories: ["node_modules", "."],
    extensions: ["", ".js"]
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?stage=0"}
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      mangle: true
    })
  ]
};
