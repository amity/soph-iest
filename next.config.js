const path = require("path");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const aliases = {
  root: path.resolve(__dirname),
  components: path.resolve(__dirname, "components"),
  data: path.resolve(__dirname, "components/data"),
  utils: path.resolve(__dirname, "utils")
};

module.exports = withCSS(
  withSass({
    webpack(config) {
      config.module.rules.push({
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader: "url-loader"
      });

      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty"
      };

      config.resolve = {
        extensions: [".js", ".jsx"],
        alias: aliases
      };

      return config;
    }
  })
);
