var webpack = require("webpack");

module.exports = {
  entry: "./ics/index.js",

  output: {
    path: __dirname,
    filename: "ics.min.js"
  },

  resolve: {
    modulesDirectories: ["node_modules", "./ics"],
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
