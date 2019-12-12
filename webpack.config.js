const path = require("path");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
