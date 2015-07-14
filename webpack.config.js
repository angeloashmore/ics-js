module.exports = {
  entry: "./ICS.js",

  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  resolve: {
    modulesDirectories: ["node_modules", "./js"],
    extensions: ["", ".js"]
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader?stage=0"}
    ]
  }
};
