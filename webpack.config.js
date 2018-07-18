module.exports = {
  module: {
    rules: [
      {
        test: /\.(s)?css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
