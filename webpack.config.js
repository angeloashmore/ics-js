var webpack = require("webpack");

module.exports = {
  devtool: 'sourcemap',

  entry: "./ics/index.js",

  output: {
    path: __dirname,
    filename: "ics.js"
  },

  resolve: {
    modulesDirectories: ["node_modules", "./ics"],
    extensions: ["", ".js"]
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?stage=0"}
    ]
  }
};
